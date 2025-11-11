import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { RefreshCw, Activity, Cpu, HardDrive } from 'lucide-react';

export function AgentMonitor() {
  const [lastRefresh, setLastRefresh] = useState(new Date());

  const agents = [
    { name: 'Self-Learning Supervisor Agent', phase: 'Core System', status: 'Active', load: 85 },
    { name: 'Topic Generation Agent', phase: 'Ideation', status: 'Active', load: 72 },
    { name: 'Research Agent', phase: 'Research', status: 'Processing', load: 91 },
    { name: 'SEO Agent', phase: 'SEO', status: 'Idle', load: 15 },
    { name: 'Grammar Checker Agent', phase: 'Editing', status: 'Active', load: 68 },
    { name: 'Content Generation Agent', phase: 'Drafting', status: 'Active', load: 79 },
    { name: 'Plagiarism Check Agent', phase: 'Validation', status: 'Idle', load: 22 },
    { name: 'Image Selection Agent', phase: 'Enrichment', status: 'Processing', load: 54 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Processing':
        return 'bg-blue-100 text-blue-800';
      case 'Idle':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleRefresh = () => {
    setLastRefresh(new Date());
  };

  return (
    <div>
      <motion.div 
        className="mb-8 flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <h2>Agent Monitor</h2>
          <p className="text-gray-600 mt-1">Real-time monitoring of AI agents</p>
        </div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button onClick={handleRefresh} variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh Status
          </Button>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Active Agents
          </motion.h3>

          <div className="space-y-3">
            {agents.map((agent, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-lg border border-gray-200 p-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-gray-900 mb-1">{agent.name}</h4>
                    <p className="text-sm text-gray-600">Phase: {agent.phase}</p>
                  </div>
                  <motion.span 
                    className={`px-3 py-1 rounded-full text-xs ${getStatusColor(agent.status)}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {agent.status}
                  </motion.span>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Load</span>
                    <motion.span 
                      className="text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {agent.load}%
                    </motion.span>
                  </div>
                  <Progress value={agent.load} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <motion.div 
            className="bg-white rounded-lg border border-gray-200 p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="mb-6">System Health</h3>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Cpu className="w-4 h-4 text-gray-600" />
                    </motion.div>
                    <span className="text-sm text-gray-600">CPU Usage</span>
                  </div>
                  <span>67%</span>
                </div>
                <Progress value={67} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <HardDrive className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-600">Memory</span>
                  </div>
                  <span>4.2GB/8GB</span>
                </div>
                <Progress value={52.5} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Activity className="w-4 h-4 text-gray-600" />
                    </motion.div>
                    <span className="text-sm text-gray-600">Queue Length</span>
                  </div>
                  <span>12 tasks</span>
                </div>
                <div className="text-xs text-gray-500">Last updated: {lastRefresh.toLocaleTimeString()}</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h4 className="mb-3 text-green-900">System Status</h4>
            <div className="space-y-2 text-sm">
              <motion.div 
                className="flex justify-between"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <span className="text-green-800">Active Agents:</span>
                <span className="text-green-900">25</span>
              </motion.div>
              <motion.div 
                className="flex justify-between"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-green-800">Idle Agents:</span>
                <span className="text-green-900">8</span>
              </motion.div>
              <motion.div 
                className="flex justify-between"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
              >
                <span className="text-green-800">Processing:</span>
                <span className="text-green-900">12</span>
              </motion.div>
              <motion.div 
                className="mt-4 pt-4 border-t border-green-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                <div className="flex items-center gap-2">
                  <motion.div 
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-green-900">All Systems Operational</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}