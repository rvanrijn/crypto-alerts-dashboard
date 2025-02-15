import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Bell, Settings, Users, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const Dashboard = () => {
  const alerts = [
    {
      type: 'bullish',
      crypto: 'BTC/USD',
      time: '2 minutes ago',
      message: 'Bullish divergence detected on 4H timeframe'
    },
    {
      type: 'bearish',
      crypto: 'ETH/USD',
      time: '15 minutes ago',
      message: 'Bearish divergence detected on 1H timeframe'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold">Crypto Divergence Alerts</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="h-6 w-6 text-gray-500" />
              <Settings className="h-6 w-6 text-gray-500" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
              <Bell className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Community Members</CardTitle>
              <Users className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,834</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Signal Accuracy</CardTitle>
              <TrendingUp className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94.2%</div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Alerts */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Recent Alerts</h2>
          {alerts.map((alert, index) => (
            <Alert key={index} className="flex items-center">
              {alert.type === 'bullish' ? (
                <ArrowUpRight className="h-4 w-4 text-green-500 mr-2" />
              ) : (
                <ArrowDownRight className="h-4 w-4 text-red-500 mr-2" />
              )}
              <div>
                <AlertTitle className="text-sm font-semibold">
                  {alert.crypto} • {alert.time}
                </AlertTitle>
                <AlertDescription className="text-sm">
                  {alert.message}
                </AlertDescription>
              </div>
            </Alert>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;