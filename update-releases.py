#!/usr/bin/env python3
import subprocess
import json
import os
import re

REPO = "Octrafic/octrafic-cli"
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
RELEASES_DIR = os.path.join(SCRIPT_DIR, "releases")
CONFIG_FILE = os.path.join(SCRIPT_DIR, ".vitepress", "config.ts")


def get_releases():
    result = subprocess.run(
        ["gh", "release", "list", "--repo", REPO, "--json", "tagName", "--limit", "100"],
        capture_output=True, text=True, check=True
    )
    return [r["tagName"] for r in json.loads(result.stdout)]


def get_release_body(tag):
    result = subprocess.run(
        ["gh", "release", "view", tag, "--repo", REPO, "--json", "body"],
        capture_output=True, text=True, check=True
    )
    return json.loads(result.stdout).get("body") or ""


def write_release_file(tag, body):
    os.makedirs(RELEASES_DIR, exist_ok=True)
    path = os.path.join(RELEASES_DIR, f"{tag}.md")
    with open(path, "w") as f:
        f.write(f"# {tag}\n\n{body.strip()}\n")
    print(f"  Written releases/{tag}.md")


def update_sidebar(tags):
    with open(CONFIG_FILE, "r") as f:
        content = f.read()

    items = "\n".join(
        f"          {{ text: '{t}', link: '/releases/{t}' }}," for t in tags
    ).rstrip(",")

    new_section = (
        "{\n"
        "        text: 'Release Notes',\n"
        "        items: [\n"
        f"{items}\n"
        "        ]\n"
        "      }"
    )

    updated = re.sub(
        r"\{\s*text:\s*'Release Notes',\s*items:\s*\[.*?\]\s*\}",
        new_section,
        content,
        flags=re.DOTALL,
    )

    with open(CONFIG_FILE, "w") as f:
        f.write(updated)

    print(f"  Updated sidebar with {len(tags)} releases")


def main():
    print("Fetching releases from GitHub...")
    tags = get_releases()
    print(f"Found: {', '.join(tags)}\n")

    for tag in tags:
        body = get_release_body(tag)
        write_release_file(tag, body)

    print()
    update_sidebar(tags)
    print("\nDone! Remember to commit and push the changes.")


if __name__ == "__main__":
    main()
