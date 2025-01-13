import React from 'react';
import fs from 'fs/promises';
import path from 'path';

interface GallerySectionProps {
  semester: string;
  images: string[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ semester, images }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4">{semester}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative h-64 overflow-hidden rounded-lg shadow-lg">
          <img
            src={`/gallery/${semester.toLowerCase()}/${image}`}
            alt={`${semester} event`}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  </div>
);

async function getGalleryData() {
  const galleryDirectory = path.join(process.cwd(), 'public/gallery');
  const semesters = await fs.readdir(galleryDirectory);
  
  const galleryData: { [key: string]: string[] } = {};
  
  for (const semester of semesters) {
    const semesterPath = path.join(galleryDirectory, semester);
    const images = await fs.readdir(semesterPath);
    galleryData[semester] = images;
  }
  
  return galleryData;
}

export default async function Gallery() {
  const galleryData = await getGalleryData();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Event Gallery</h1>
      {Object.entries(galleryData)
        .sort((a, b) => b[0].localeCompare(a[0]))
        .map(([semester, images]) => (
          <GallerySection key={semester} semester={semester} images={images} />
        ))}
    </div>
  );
}