#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images/products

# Download banner images
curl "https://source.unsplash.com/1920x600/?furniture,living-room" > public/images/products/banner1.jpg
curl "https://source.unsplash.com/1920x600/?bedroom,interior" > public/images/products/banner2.jpg
curl "https://source.unsplash.com/1920x600/?kitchen,modern" > public/images/products/banner3.jpg

# Download product images
curl "https://source.unsplash.com/400x400/?furniture,drawer" > public/images/products/product1.jpg
curl "https://source.unsplash.com/400x400/?furniture,rack" > public/images/products/product2.jpg
curl "https://source.unsplash.com/400x400/?furniture,clothes-rack" > public/images/products/product3.jpg
curl "https://source.unsplash.com/400x400/?furniture,tablecloth" > public/images/products/product4.jpg

# Download service images
curl "https://source.unsplash.com/600x400/?delivery,service" > public/images/products/service1.jpg
curl "https://source.unsplash.com/600x400/?interior,design" > public/images/products/service2.jpg
curl "https://source.unsplash.com/600x400/?furniture,installation" > public/images/products/service3.jpg 