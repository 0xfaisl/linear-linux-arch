<p align="center">
  <img alt="Linear for Arch Linux" src="linear-app-icon.png" width="100">
</p>

<h1 align="center">Linear for Arch Linux</h1>

<p align="center">
  A lightweight, unofficial Linear desktop launcher for Arch Linux.
</p>

# Install

```sh
git clone https://github.com/0xfaisl/linear-linux-arch.git
cd linear-linux-arch
makepkg -si
```

Then launch `linear-linux` or select **Linear** from the app launcher.

The launcher uses Chromium's normal profile, so Google, email, and SAML sign-in work as they do in the browser. Linear links, including Settings, stay in the app.

# Development

```sh
makepkg --verifysource
makepkg -f
node test-stay-in-app.js
```

# Having an issue?

[Open an issue](https://github.com/0xfaisl/linear-linux-arch/issues) with your Arch version, Chromium version, and a description of the problem.

# Disclaimer

This is an unofficial launcher for Linear. Linear is a trademark of Linear Orbit, Inc. This project is not affiliated with or endorsed by Linear.
