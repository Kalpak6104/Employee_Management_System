import React from "react";
import LoginLeftSide from "../components/LoginLeftSide";
import { Link } from "react-router-dom";
import { Shield, User } from "lucide-react";

const Login = () => {
  const portalOptions = [
    {
      to: "/login/admin",
      title: "Admin Portal",
      description: "Manage employees, departments, payroll, and system configurations",
      icon: Shield,
    },
    {
      to: "/login/employee",
      title: "Employee Portal",
      description: "View your profile, track attendance, request time off and access payslips",
      icon: User,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <LoginLeftSide />
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto min-h-screen">
        <div className="w-full max-w-md relative z-10">
          {/* header */}
          <div className="mb-8">
            <h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-3">
              Welcome Back
            </h2>
            <p className="text-slate-500">
              Select your portal to securely access the system
            </p>
          </div>

          {/* portals list */}
          <div className="space-y-4">
            {portalOptions.map((portal) => (
              <Link
                key={portal.to}
                to={portal.to}
                className="group block bg-slate-50 border border-slate-200 rounded-lg p-5 sm:p-6 transition-all duration-300 hover:border-indigo-400 hover:bg-indigo-50"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition-colors">
                    <portal.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{portal.title}</p>
                    <p className="text-sm text-slate-500">{portal.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* footer */}
          <div className="mt-12 text-center md:text-left text-sm text-slate-400">
             <p>&copy; {new Date().getFullYear()} GreatStack.All rights reserved </p>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Login;