
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, MessageSquare, TrendingUp, Users } from "lucide-react";

interface DashboardProps {
  companyName: string;
  productName: string;
}

const Dashboard = ({ companyName, productName }: DashboardProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 beamstack-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold text-gray-900">{companyName}</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="beamstack-gradient">
                <Plus className="w-4 h-4 mr-2" />
                New Board
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome to your feedback management center</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Feedback</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1</div>
                <p className="text-xs text-muted-foreground">+1 from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1</div>
                <p className="text-xs text-muted-foreground">+1 new user this week</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Growth</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+100%</div>
                <p className="text-xs text-muted-foreground">+100% from last month</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{productName} Feedback Board</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-6 bg-gradient-to-r from-blue-50 to-blue-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 beamstack-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-medium text-sm">U</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-medium text-gray-900">Anonymous User</span>
                        <span className="text-sm text-gray-500">• 2 minutes ago</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Great product! Love the user interface
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        I've been using this product for a few days now and I'm really impressed with the clean interface and intuitive design. The onboarding process was smooth and I was able to get started right away. Keep up the great work!
                      </p>
                      <div className="flex items-center space-x-4 mt-4">
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                          👍 5
                        </button>
                        <button className="text-gray-600 hover:text-gray-700 text-sm font-medium">
                          Reply
                        </button>
                        <span className="text-sm text-gray-500 bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          Feature Request
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center py-8 text-gray-500">
                  <MessageSquare className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>This is your first feedback post! Share your board URL to start collecting more feedback.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
