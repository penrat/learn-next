"use client"

// Make sure the file exists at the correct path and the filename matches the import (case-sensitive on some systems)
import PortfolioForm from '../components/PortfolioForm';

export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">สมัคร Portfolio TCAS69</h1>
      <PortfolioForm />
    </div>
  )
}
