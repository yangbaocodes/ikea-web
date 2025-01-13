import React from 'react';
import Header from '@/components/layout/Header/Header';
import Navigation from '@/components/layout/Navigation/Navigation';
import Banner from '@/components/home/Banner/Banner';
import RecentRecommend from '@/components/home/RecentRecommend/RecentRecommend';
import HotSales from '@/components/home/HotSales/HotSales';
import NewYearAtmosphere from '@/components/home/NewYearAtmosphere/NewYearAtmosphere';
import ExploreRooms from '@/components/home/ExploreRooms/ExploreRooms';
import HomeInspiration from '@/components/home/HomeInspiration/HomeInspiration';
import SustainableTips from '@/components/home/SustainableTips/SustainableTips';
import ProductNotices from '@/components/home/ProductNotices/ProductNotices';
import Footer from '@/components/layout/Footer/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <Navigation />
        <main>
          <Banner />
          <RecentRecommend />
          <HotSales />
          <NewYearAtmosphere />
          <ExploreRooms />
          <HomeInspiration />
          <SustainableTips />
          <ProductNotices />
        </main>
      </div>
      <Footer />
    </div>
  );
}
