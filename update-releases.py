#!/usr/bin/env python3
import subprocess
import json
import os
import re

REPO = "Octrafic/octrafic-cli"
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
RELEASES_FILE = os.path.join(SCRIPT_DIR, "releases.md")
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


def write_releases_file(releases):
    sections = "\n\n---\n\n".join(
        f"## {tag}\n\n{body.strip()}" for tag, body in releases
    )
    with open(RELEASES_FILE, "w") as f:
        f.write(f"# Release Notes\n\n{sections}\n")
    print(f"  Written releases.md ({len(releases)} releases)")


def update_sidebar():
    with open(CONFIG_FILE, "r") as f:
        content = f.read()

    updated = re.sub(
        r"\{\s*text:\s*'Release Notes',\s*items:\s*\[.*?\]\s*\}",
        "{ text: 'Release Notes', link: '/releases' }",
        content,
        flags=re.DOTALL,
    )

    with open(CONFIG_FILE, "w") as f:
        f.write(updated)

    print("  Updated sidebar")


def main():
    print("Fetching releases from GitHub...")
    tags = get_releases()
    print(f"Found: {', '.join(tags)}\n")

    releases = [(tag, get_release_body(tag)) for tag in tags]
    write_releases_file(releases)

    print()
    update_sidebar()
    print("\nDone! Remember to commit and push the changes.")


if __name__ == "__main__":
    main()
