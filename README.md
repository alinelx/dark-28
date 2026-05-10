# Dark28.pt

<img src="https://i.imgur.com/NgOQvTi.png" alt="dark28.pt logo" width="200"/>

## Lisbon’s Dark Cultural Heritage Route

Dark28 is a front-end product concept that reimagines Lisbon’s iconic Tram 28 as a self-guided cultural route focused on dark heritage, historical memory, and ethical storytelling.

Rather than highlighting only postcard landmarks, the project invites users to explore places connected to dictatorship, colonialism, religion, death, monarchy, and collective memory across Lisbon. It was rebuilt from an academic cultural tourism concept into a portfolio-ready digital product focused on UX/UI, front-end architecture, and content-driven design.

## Why this project exists

Most tourism products prioritize convenience, entertainment, and scenic landmarks. Dark28 explores a different question:

What happens when a familiar city route is reinterpreted through overlooked histories?

Using Lisbon’s Tram 28 as a narrative structure, Dark28 turns a well-known tourist path into a reflective digital experience centered on memory, context, and responsible interpretation.

## Features

- Editorial homepage with project framing
- Landmark discovery by historical theme
- Landmark detail pages with contextual storytelling
- Personal plan with saved landmarks
- Visited landmark tracking
- Route direction switching
- Profile and progress overview
- Light and dark theme support

Implemented experience is visible across the homepage, route browsing, landmark detail pages, plan page, and progress page.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS

## Project Structure

    └───src
        ├───app
        │   ├───about
        │   ├───plan
        │   ├───profile
        │   └───route
        │       └───[slug]
        ├───components
        ├───data
        ├───hooks
        └───types

### Main folders
- app/ — routes and layout
- components/ — reusable UI building blocks
- data/ — landmarks, categories, and route information
- hooks/ — client-side state management
- types/ — shared TypeScript models

This structure supports a modular and portfolio-friendly architecture.

## Key Product Ideas
### Editorial framing

The homepage introduces the project as more than a route browser. It explains why the subject matters, how the experience works, and what kinds of stories users can expect.

### Ethical storytelling

Dark28 is designed to approach difficult history with care. The interface and content aim to support reflection rather than spectacle.

### Personal route building

Users can save landmarks, switch direction, mark places as visited, and track progress through local state persistence.

## Local State

Dark28 currently uses client-side persistence for:

- saved landmarks
- visited landmarks
- route direction
- theme preference

This is implemented through custom hooks and localStorage.

## Current Status

Dark28 is an active front-end portfolio case study.

The core product experience is already in place, including route browsing, landmark details, local planning, progress tracking, and theme persistence. A few interface polish details still remain, but the main product direction and architecture are established.

## Roadmap

Possible next improvements:

- refine UI details
- improve accessibility further
- expand the landmark dataset
- enhance progress visualization
- explore map-based discovery

## Author

Aline Lopes Xavier

## License

MIT