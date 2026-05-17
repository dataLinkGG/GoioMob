# Description

This project was generated using v0, for a client to has he's app allowed to be published on Google Play and App Store.

The processedure was to generate the react app using a prompt, adjust it and download the app. After downloading the app,
unzip it, open in editor (VS Code).

```bash
git init
git add .
git commit -m "Initial commit from v0" # example
```

I'm using bun for this project 

```bash
wsl
sudo apt update
curl -fsSL https://bun.com/install | bash
```

Verify bun installtion by verifying the version:

```bash
bun --version
```

```bash
echo $SHELL
```

Verify the shell

```bash
echo $SHEL
```

Open (if it's bashrc, for example)

```bash
nano ~/.bashrc
```

Make sure you have the following lines on `️nano ~/.bashrc`:

```bash
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"
```

Install dependencies:

```bash
bun install
```

Run the development server:

```bash
bun run dev
```
