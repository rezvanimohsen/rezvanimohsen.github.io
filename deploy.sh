#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Copy dist contents to root
echo "Deploying to GitHub Pages..."
cp -r dist/* .

# Remove the dist directory
rm -rf dist

# Git add, commit, and push
echo "Pushing changes to GitHub..."
git add .
git commit -m "Deploy: Update website"
git push origin main

echo "✓ Deployment complete! Your site will be live shortly."
