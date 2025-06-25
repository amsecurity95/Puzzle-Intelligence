import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CreditCard, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Eye, 
  EyeOff,
  Send, 
  Plus,
  Smartphone,
  Shield,
  Bell,
  Settings,
  ChevronLeft,
  ChevronRight,
  DollarSign,
  TrendingUp,
  Wallet,
  PiggyBank,
  Building,
  User
} from "lucide-react";
import { Link } from "wouter";

export default function BankingTemplate() {
  const [showBalance, setShowBalance] = useState(true);
  const [selectedAccount, setSelectedAccount] = useState('checking');

  const accounts = [
    {
      id: 'checking',
      name: 'Checking Account',
      type: 'Primary',
      balance: 5847.32,
      accountNumber: '****1234',
      icon: <Wallet className="h-5 w-5" />
    },
    {
      id: 'savings',
      name: 'Savings Account',
      type: 'High Yield',
      balance: 12456.89,
      accountNumber: '****5678',
      icon: <PiggyBank className="h-5 w-5" />
    },
    {
      id: 'credit',
      name: 'Credit Card',
      type: 'Platinum',
      balance: -1234.56,
      accountNumber: '****9012',
      icon: <CreditCard className="h-5 w-5" />
    }
  ];

  const transactions = [
    {
      id: 1,
      description: 'Salary Deposit',
      amount: 3500.00,
      date: '2024-05-27',
      type: 'credit',
      category: 'Income'
    },
    {
      id: 2,
      description: 'Grocery Store',
      amount: -124.57,
      date: '2024-05-26',
      type: 'debit',
      category: 'Food & Dining'
    },
    {
      id: 3,
      description: 'Electric Bill',
      amount: -89.23,
      date: '2024-05-25',
      type: 'debit',
      category: 'Utilities'
    },
    {
      id: 4,
      description: 'Coffee Shop',
      amount: -12.45,
      date: '2024-05-25',
      type: 'debit',
      category: 'Food & Dining'
    },
    {
      id: 5,
      description: 'Online Transfer',
      amount: -500.00,
      date: '2024-05-24',
      type: 'debit',
      category: 'Transfer'
    }
  ];

  const quickActions = [
    { icon: <Send className="h-5 w-5" />, label: 'Send Money', color: 'bg-blue-500' },
    { icon: <Plus className="h-5 w-5" />, label: 'Deposit', color: 'bg-green-500' },
    { icon: <CreditCard className="h-5 w-5" />, label: 'Pay Bills', color: 'bg-purple-500' },
    { icon: <Building className="h-5 w-5" />, label: 'ATM Locator', color: 'bg-orange-500' }
  ];

  const currentAccount = accounts.find(acc => acc.id === selectedAccount);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">💳</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">SecureBank</h1>
                <p className="text-xs text-gray-500">Mobile Banking</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Welcome Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Welcome back, John!</h2>
          <p className="text-gray-600">Manage your finances with ease</p>
        </div>

        {/* Account Balance Card */}
        <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                {currentAccount?.icon}
                <span className="font-medium">{currentAccount?.name}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowBalance(!showBalance)}
                className="text-white hover:bg-white/20"
              >
                {showBalance ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
              </Button>
            </div>
            
            <div className="mb-2">
              <p className="text-blue-100 text-sm">Available Balance</p>
              <p className="text-3xl font-bold">
                {showBalance ? `$${Math.abs(currentAccount?.balance || 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '••••••'}
              </p>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-blue-100">{currentAccount?.accountNumber}</span>
              <Badge variant="secondary" className="bg-white/20 text-white border-none">
                {currentAccount?.type}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Account Selector */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {accounts.map((account) => (
            <Button
              key={account.id}
              variant={selectedAccount === account.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedAccount(account.id)}
              className="whitespace-nowrap"
            >
              {account.icon}
              <span className="ml-2">{account.name}</span>
            </Button>
          ))}
        </div>

        {/* Quick Actions */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <div className={`w-12 h-12 ${action.color} rounded-full flex items-center justify-center mx-auto mb-2 text-white`}>
                    {action.icon}
                  </div>
                  <p className="text-sm font-medium text-gray-900">{action.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
            <Button variant="ghost" size="sm" className="text-blue-600">
              View All
            </Button>
          </div>
          
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'
                      }`}>
                        {transaction.type === 'credit' ? 
                          <ArrowDownLeft className="h-5 w-5 text-green-600" /> : 
                          <ArrowUpRight className="h-5 w-5 text-red-600" />
                        }
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{transaction.description}</p>
                        <p className="text-sm text-gray-500">{transaction.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${
                        transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {transaction.type === 'credit' ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-500">{transaction.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Spending Insights */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Spending Insights
            </CardTitle>
            <CardDescription>Your spending this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Food & Dining</span>
                <span className="font-medium">$437.85</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Utilities</span>
                <span className="font-medium">$234.67</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Shopping</span>
                <span className="font-medium">$189.23</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '35%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Features */}
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Shield className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Your account is secure</p>
                <p className="text-sm text-gray-600">Protected with biometric authentication</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="max-w-md mx-auto px-4 py-2">
          <div className="flex justify-around">
            <Button variant="ghost" className="flex-col h-auto py-2">
              <DollarSign className="h-5 w-5 mb-1" />
              <span className="text-xs">Home</span>
            </Button>
            <Button variant="ghost" className="flex-col h-auto py-2">
              <CreditCard className="h-5 w-5 mb-1" />
              <span className="text-xs">Cards</span>
            </Button>
            <Button variant="ghost" className="flex-col h-auto py-2">
              <Send className="h-5 w-5 mb-1" />
              <span className="text-xs">Transfer</span>
            </Button>
            <Button variant="ghost" className="flex-col h-auto py-2">
              <User className="h-5 w-5 mb-1" />
              <span className="text-xs">Profile</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Back to Realizations */}
      <div className="fixed top-20 left-4">
        <Link href="/realizations">
          <Button variant="outline" className="shadow-lg bg-white">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>
      </div>
    </div>
  );
}