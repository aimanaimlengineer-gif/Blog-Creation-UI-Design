import { motion } from 'motion/react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function Analytics() {
  const viewsData = [
    { date: 'Jan 1', views: 245 },
    { date: 'Jan 5', views: 389 },
    { date: 'Jan 10', views: 512 },
    { date: 'Jan 15', views: 678 },
    { date: 'Jan 20', views: 543 },
    { date: 'Jan 25', views: 721 },
    { date: 'Jan 30', views: 856 },
  ];

  const agentPerformance = [
    { name: 'Content Generation', rate: 94.2 },
    { name: 'SEO Optimization', rate: 89.7 },
    { name: 'Quality Check', rate: 97.1 },
    { name: 'Research', rate: 92.4 },
  ];

  const blogStats = [
    { title: 'AI Trends 2025', views: 2341, engagement: 8.7, seo: 94 },
    { title: 'Tech Innovation Guide', views: 1876, engagement: 7.2, seo: 89 },
    { title: 'Market Analysis Report', views: 1543, engagement: 9.1, seo: 91 },
    { title: 'Digital Marketing Tips', views: 1432, engagement: 8.3, seo: 87 },
    { title: 'Future of Technology', views: 1289, engagement: 7.8, seo: 92 },
  ];

  return (
    <div>
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2>Analytics & Insights</h2>
        <p className="text-gray-600 mt-1">Performance metrics and data visualization</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <motion.div 
          className="bg-white rounded-lg border border-gray-200 p-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          whileHover={{ y: -4, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
        >
          <h3 className="mb-6">Blog Performance</h3>
          
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={viewsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="date" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="views" 
                stroke="#3b82f6" 
                strokeWidth={2}
                dot={{ fill: '#3b82f6', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div 
          className="bg-white rounded-lg border border-gray-200 p-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ y: -4, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
        >
          <h3 className="mb-6">Agent Efficiency</h3>
          
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={agentPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px'
                }}
              />
              <Bar dataKey="rate" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      <motion.div 
        className="bg-white rounded-lg border border-gray-200 p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="mb-6">Recent Blog Analytics</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-gray-600">Blog Title</th>
                <th className="text-left py-3 px-4 text-gray-600">Views</th>
                <th className="text-left py-3 px-4 text-gray-600">Engagement</th>
                <th className="text-left py-3 px-4 text-gray-600">SEO Score</th>
              </tr>
            </thead>
            <tbody>
              {blogStats.map((blog, index) => (
                <motion.tr 
                  key={index} 
                  className="border-b border-gray-100 hover:bg-gray-50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (index * 0.1) }}
                >
                  <td className="py-3 px-4">{blog.title}</td>
                  <td className="py-3 px-4 text-gray-600">{blog.views.toLocaleString()}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[100px]">
                        <motion.div 
                          className="bg-blue-600 h-2 rounded-full" 
                          initial={{ width: 0 }}
                          animate={{ width: `${blog.engagement * 10}%` }}
                          transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
                        />
                      </div>
                      <span className="text-sm text-gray-600">{blog.engagement}/10</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <motion.span 
                      className={`px-2.5 py-0.5 rounded-full text-xs ${
                        blog.seo >= 90 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6 + (index * 0.1) }}
                    >
                      {blog.seo}
                    </motion.span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}