import { MetricCard } from './MetricCard';
import { TrendingUp, FileText, CheckCircle, Star, Bot } from 'lucide-react';
import { motion } from 'motion/react';

export function Dashboard() {
  const recentActivity = [
    { time: '10:30 AM', agent: 'Title Generation Agent', status: 'Completed', blog: 'AI Trends 2025' },
    { time: '10:28 AM', agent: 'SEO Optimization Agent', status: 'In Progress', blog: 'Tech Review' },
    { time: '10:25 AM', agent: 'Research Agent', status: 'Completed', blog: 'Market Analysis' },
    { time: '10:20 AM', agent: 'Grammar Checker Agent', status: 'Completed', blog: 'Business Guide' },
    { time: '10:15 AM', agent: 'Content Generation Agent', status: 'Completed', blog: 'Marketing Tips' },
  ];

  return (
    <div>
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2>Dashboard</h2>
        <p className="text-gray-600 mt-1">Overview of your blog creation system</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <MetricCard
            title="Active Agents"
            value="25"
            change="+2"
            icon={Bot}
            trend="up"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <MetricCard
            title="Blogs Created"
            value="147"
            change="+12"
            icon={FileText}
            trend="up"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <MetricCard
            title="Success Rate"
            value="94.2%"
            change="+1.2%"
            icon={CheckCircle}
            trend="up"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <MetricCard
            title="Avg. Quality Score"
            value="8.7/10"
            change="+0.3"
            icon={Star}
            trend="up"
          />
        </motion.div>
      </div>

      <motion.div 
        className="bg-white rounded-lg border border-gray-200 p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="mb-4">Recent Activity</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-gray-600">Time</th>
                <th className="text-left py-3 px-4 text-gray-600">Agent</th>
                <th className="text-left py-3 px-4 text-gray-600">Status</th>
                <th className="text-left py-3 px-4 text-gray-600">Blog</th>
              </tr>
            </thead>
            <tbody>
              {recentActivity.map((activity, index) => (
                <motion.tr 
                  key={index} 
                  className="border-b border-gray-100 hover:bg-gray-50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + (index * 0.1) }}
                >
                  <td className="py-3 px-4 text-gray-600">{activity.time}</td>
                  <td className="py-3 px-4">{activity.agent}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs ${
                        activity.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {activity.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-900">{activity.blog}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}