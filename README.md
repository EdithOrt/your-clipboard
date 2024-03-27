# Your clipboard

<div align="center">

  <img alt="GitHub deployments" src="https://img.shields.io/github/deployments/EdithOrt/your-clipboard/Production">

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/EdithOrt/your-clipboard">
  
  <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/t/EdithOrt/your-clipboard?color=FF9341">

  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/mfts/papermark">

  <img alt="Followers" src="https://img.shields.io/github/followers/EdithOrt">

</div>

It is a website to temporarily save text that you have previously copied to your clipboard. This way you will not lose the information that you consider important.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [Contributors](#contributors)

## Installation

```bash
git clone https://github.com/EdithOrt/your-clipboard.git
cd your-clipboard
npm install
```

## Usage

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

Open http://localhost:3000 in your browser
```

## Dependencies

- React
- React-dom
- Next
- Next-images
- Moment
- Clsx
- Typescript
- Tailwindcss
- Autoprefixer
- Prettier
- Eslint
- Postcss

## Folder Structure

```bash
your-clipboard/
│
├── public/
│ └── y-clipboard-logo.svg
│
│
├── app/
│ ├── lib/
│ │ ├── updateClipboard.tsx
│ │ └── utils.tsx
│ ├── ui/
│ │ ├── alert.tsx
│ │ ├── alerts-container.tsx
│ │ ├── button.tsx
│ │ ├── card.tsx
│ │ ├── cards-container.tsx
│ │ ├── custom.css
│ │ ├── empty-state.tsx
│ │ ├── fonts.ts
│ │ ├── footer-container.tsx
│ │ ├── modal-container.tsx
│ │ ├── modal.tsx
│ │ ├── navbar.tsx
│ │ └── tooltip.xml
│ ├── favicon.ico
│ ├── globals.css
│ ├── layout.tsx
│ ├── opengraph-image.png
│ ├── page.tsx
│ ├── providers.tsx
│ ├── robots.txt
│ └── sitemap.xml
│
├── contexts/
│ └── clipboardData.tsx
│
├── .eslintrc.json
├── .gitignore
├── aditional.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.js
├── prettier.config.js
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## Contributing

Your clipboard is an open-source project and we welcome contributions from the community.

If you'd like to contribute, please fork the repository and make changes as you'd like. And pull request your changes!

## Contributors

<a href="https://github.com/EdithOrt/your-clipboard/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=EdithOrt/your-clipboard" />
</a>
