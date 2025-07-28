#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 Starting deployment process...${NC}"

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo -e "${YELLOW}⚠️  Not in a git repository. Please initialize git first.${NC}"
    exit 1
fi

# Check if gh-pages is installed
if ! npm list gh-pages > /dev/null 2>&1; then
    echo -e "${YELLOW}📦 Installing gh-pages...${NC}"
    npm install -D gh-pages
fi

# Build the project
echo -e "${GREEN}🔨 Building the project...${NC}"
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Build successful!${NC}"
    
    # Deploy to GitHub Pages
    echo -e "${GREEN}🚀 Deploying to GitHub Pages...${NC}"
    npm run deploy
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}🎉 Deployment successful!${NC}"
        echo -e "${GREEN}🌐 Your portfolio is now live at: https://shahriar0104.github.io/portfolio${NC}"
        echo ""
        echo -e "${YELLOW}📝 Note: It may take a few minutes for the changes to appear on GitHub Pages.${NC}"
    else
        echo -e "${YELLOW}❌ Deployment failed. Please check your git remote and permissions.${NC}"
        exit 1
    fi
else
    echo -e "${YELLOW}❌ Build failed!${NC}"
    exit 1
fi 