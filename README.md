# react-foundations

## Setting up Next.js

1. Install Node.js and npm (if not already installed).

```bash
# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"
# Download and install Node.js:
nvm install 22
# Verify the Node.js version:
node -v # Should print "v22.16.0".
nvm current # Should print "v22.16.0".
# Verify npm version:
npm -v # Should print "10.9.2".
```

- [Nodejs Install Instructions](https://nodejs.org/en/download)

2. Install dependencies.

- [Read more about these](https://nextjs.org/learn/react-foundations/installation) 
- Create a `package.json` file in the root directory:

```bash
{}
```

- Run the folowing command in the terminal:

```bash
npm install react@latest react-dom@latest next@latest
```

