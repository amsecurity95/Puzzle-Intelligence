import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import AIIntelligence from "@/pages/ai-intelligence";
import Realizations from "@/pages/realizations";
import RestaurantTemplate from "@/pages/template-restaurant";
import FitnessTemplate from "@/pages/template-fitness";
import HealthcareTemplate from "@/pages/template-healthcare";
import BusinessTemplate from "@/pages/template-business";
import ECommerceTemplate from "@/pages/template-ecommerce";
import BankingTemplate from "@/pages/template-banking";
import RealEstateTemplate from "@/pages/template-realestate";
import InventoryTemplate from "@/pages/template-inventory";
import CybersecurityTemplate from "@/pages/template-cybersecurity";
import AdminDashboard from "@/pages/admin-dashboard";
import AdminLogin from "@/pages/admin-login";
import Careers from "@/pages/careers";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/ai-intelligence" component={AIIntelligence} />
      <Route path="/realizations" component={Realizations} />
      <Route path="/template/restaurant" component={RestaurantTemplate} />
      <Route path="/template/fitness" component={FitnessTemplate} />
      <Route path="/template/healthcare" component={HealthcareTemplate} />
      <Route path="/template/business" component={BusinessTemplate} />
      <Route path="/template/ecommerce" component={ECommerceTemplate} />
      <Route path="/template/banking" component={BankingTemplate} />
      <Route path="/template/realestate" component={RealEstateTemplate} />
      <Route path="/template/inventory" component={InventoryTemplate} />
      <Route path="/template/cybersecurity" component={CybersecurityTemplate} />
      <Route path="/careers" component={Careers} />
      <Route path="/admin" component={AdminDashboard} />
      <Route path="/admin-login" component={AdminLogin} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
