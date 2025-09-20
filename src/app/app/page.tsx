"use client"

// Make sure the file exists at the correct path and the filename matches the import (case-sensitive on some systems)
// Make sure the import path and filename are correct (case-sensitive)
import PortfolioForm from '@/components/PortfolioForm'; // If the file is PortfolioForm.tsx or PortfolioForm.jsx

// If your file is named PortfolioForm.tsx, ensure it exists at: c:\webdev\learn-next\src\components\PortfolioForm.tsx
// If the file has a different extension, update the import accordingly, e.g.:
// import PortfolioForm from '../../components/PortfolioForm.tsx';

export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">สมัคร Portfolio TCAS69</h1>
      <PortfolioForm />
    </div>
  )
}
