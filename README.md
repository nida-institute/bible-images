# Bible Images

A structured, open, and semantically rich database of Bible-related images and maps, curated and published by the [Nida Institute](https://github.com/nida-institute).

**Status**:  Don't get too excited.  I have stubbed out a project and hope to get back to it some time this year. Nothing is ready for real use yet.  I will mock up a demo soonish.

---

## ✨ What This Is

This repository hosts the code, metadata schema, and project planning materials for an initiative to:

* Organize Bible images and maps in a semantically meaningful way
* Tag images with Bible references, historical time periods, and thematic domains (e.g., worship, healing)
* Make images searchable by linguistic and conceptual metadata across languages
* Enable contributors to upload images, curate metadata, and share publicly under free licenses
* Export structured metadata to [Wikimedia Commons](https://commons.wikimedia.org/), [Wikidata](https://www.wikidata.org/), and other open platforms

At launch, the project includes over 500 Bible maps, with plans to scale toward 10,000+ curated images.

---

## 🔍 Why This Matters

Many image databases treat content as flat: a title, a few tags, a file. But Bible engagement, translation, and study require deeper structure:

* A user may want “images related to Galilee during the time of Jesus,” not just “Galilee”
* A translator may need illustrations for the **semantic domain** “sacrifice” or “authority”
* A teacher may look for “maps of Paul’s third journey” or “visuals of temple architecture”

This project makes that possible — using **structured metadata**, **semantic tagging**, and **open access licensing** — for the global church, the translation community, and Bible educators.

---

## 🧠 Core Features (Planned)

* 📚 **Wikibase.cloud metadata backend**: Structured metadata for tagging images with people, places, themes, time periods, and verses
* 🖼️ **External image hosting**: Images stored on Wikimedia Commons, Cloudinary, or S3-compatible services
* 🧰 **Frontend app**: Built in React + Tailwind + ShadCN, lets users browse, filter, and download images
* 🛒 **Download cart**: Users can collect and download multiple images as a batch ZIP
* 🔐 **Login system for contributors**: Uploading images is limited to authenticated users
* 📦 **Commons export pipeline**: Structured metadata is exportable to Wikimedia Commons, including SDC

---

## 📁 Repository Structure

| Folder / File        | Purpose                                        |
| -------------------- | ---------------------------------------------- |
| `/src/`              | Frontend app (React, Vite, Tailwind, ShadCN)   |
| `/public/`           | Static assets                                  |
| `vite.config.js`     | GitHub Pages deployment configuration          |
| `.github/workflows/` | CI for building and deploying the frontend     |
| `README.md`          | This file                                      |
| `setup-issues.sh`    | Bootstrap script for GitHub project and issues |
| `docs/` *(planned)*  | JSON schema, contributor guides, data exports  |

---

## 🚧 Project Status

🛑 **This project is not yet under active development.**

We are currently in the planning and architecture phase.
Initial metadata schema, frontend scaffolding, and project roadmap are in place.

You can track status via our [GitHub Project Board](https://github.com/orgs/nida-institute/projects/6/views/2).

---

## 🛣️ Planned Milestones

* Define and populate metadata schema in Wikibase.cloud
* Build MVP frontend to browse and search images
* Enable basic download cart functionality
* Add upload flow for contributors (behind login)
* Export metadata to Commons and enable reuse

---

## 📄 License

This repository is licensed under the **Apache License 2.0**. See [`LICENSE`](LICENSE) for details.

All images and metadata will be released under either **Creative Commons licenses** or **public domain (CC0)** where possible. See individual entries for licensing information.

---

## 🙏 Acknowledgments

This project is developed by the Nida Institute in service of the global Bible translation, storytelling, and Scripture engagement communities.

It is built on and inspired by:

* [Wikibase.cloud](https://wikibase.cloud/)
* [Wikidata](https://www.wikidata.org/)
* [Wikimedia Commons](https://commons.wikimedia.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [ShadCN UI](https://ui.shadcn.com/)
* [JSZip](https://stuk.github.io/jszip/)
* [React](https://react.dev/)
