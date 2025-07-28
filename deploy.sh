#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build successful!"
    echo "The built files are in the 'dist' folder."
    echo "You can now deploy to GitHub Pages, Vercel, or Netlify."
    echo ""
    echo "For GitHub Pages:"
    echo "1. Push your code to GitHub"
    echo "2. Go to repository Settings > Pages"
    echo "3. Select source branch and folder (dist)"
    echo "4. Your site will be available at https://username.github.io/repository-name"
else
    echo "Build failed!"
    exit 1
fi 