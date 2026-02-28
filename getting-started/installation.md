---
title: Installation — Octrafic Docs
description: All available methods to install Octrafic CLI on Linux, macOS, and Windows.
---

# Installation

## Quick install script

The fastest way to install Octrafic. The script automatically detects your OS and architecture.

### Linux / macOS

```bash
curl -fsSL https://octrafic.com/install.sh | sh
```

On Linux, the script will install a `.deb` or `.rpm` package depending on your distribution. On macOS it uses Homebrew if available, otherwise installs the binary directly.

### Windows

```powershell
iex (irm https://octrafic.com/install.ps1)
```

Installs the binary to `%LOCALAPPDATA%\Programs\Octrafic` and adds it to your PATH.

## Package managers

### Homebrew (macOS)

```bash
brew install octrafic/tap/octrafic
```

### APT / DEB (Debian, Ubuntu, Pop OS, Linux Mint)

Download the `.deb` package from the [latest release](https://github.com/Octrafic/octrafic-cli/releases/latest) and install it:

```bash
sudo dpkg -i octrafic_*.deb
```

### RPM (Fedora, RHEL, CentOS, Rocky, AlmaLinux)

Download the `.rpm` package from the [latest release](https://github.com/Octrafic/octrafic-cli/releases/latest) and install it:

```bash
sudo rpm -i octrafic_*.rpm
```

### AUR (Arch Linux)

```bash
yay -S octrafic-bin
```

or

```bash
paru -S octrafic-bin
```

## Go

If you have Go installed:

```bash
go install github.com/Octrafic/octrafic-cli@latest
```

## Manual download

Pre-built binaries for all platforms are available on the [GitHub Releases](https://github.com/Octrafic/octrafic-cli/releases/latest) page:

- **Linux**: `octrafic_Linux_x86_64.tar.gz`, `octrafic_Linux_arm64.tar.gz`, `octrafic_Linux_armv7.tar.gz`
- **macOS**: `octrafic_Darwin_x86_64.tar.gz`, `octrafic_Darwin_arm64.tar.gz`
- **Windows**: `octrafic_Windows_x86_64.zip`

Download, extract, and place the `octrafic` binary somewhere on your `PATH`.

## Verify installation

```bash
octrafic --help
```
