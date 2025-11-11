import { LayoutDashboard, PenTool, Bot, BarChart3, Settings as SettingsIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { Logo } from './Logo';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: 'dashboard' | 'blog-creation' | 'agent-monitor' | 'analytics' | 'settings') => void;
}

export function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'blog-creation', label: 'Blog Creation', icon: PenTool },
    { id: 'agent-monitor', label: 'Agent Monitor', icon: Bot },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: SettingsIcon },
  ] as const;

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 p-6">
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <Logo />
          <h1 className="text-gray-900">BlogAI Suite</h1>
        </div>
        <p className="text-gray-500 text-sm">169 AI Agents | 18 Phases</p>
      </motion.div>

      <nav className="space-y-1">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <motion.button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </motion.button>
          );
        })}
      </nav>

      <motion.div 
        className="absolute bottom-6 left-6 right-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="text-xs text-gray-500 text-center">
          Powered by AI Agents
        </div>
      </motion.div>
    </aside>
  );
}