import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Slider } from './ui/slider';
import { Save } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { Toaster } from './ui/sonner';

export function Settings() {
  const [settings, setSettings] = useState({
    pexelsApi: '',
    defaultTone: 'professional',
    defaultLength: 'medium',
    autoPublish: false,
    maxAgents: 25,
    timeout: 120,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Settings saved successfully!');
  };

  return (
    <div>
      <Toaster />
      
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2>Settings</h2>
        <p className="text-gray-600 mt-1">Configure your blog creation system</p>
      </motion.div>

      <div className="max-w-3xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div 
            className="bg-white rounded-lg border border-gray-200 p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="mb-6">API Configuration</h3>

            <div>
              <Label htmlFor="pexels">Pexels API Key</Label>
              <Input
                id="pexels"
                type="password"
                placeholder="Enter your Pexels API key"
                value={settings.pexelsApi}
                onChange={(e) => setSettings({ ...settings, pexelsApi: e.target.value })}
              />
              <p className="text-sm text-gray-500 mt-2">
                Get your API key from{' '}
                <a href="https://www.pexels.com/api/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Pexels API
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg border border-gray-200 p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="mb-6">Default Blog Settings</h3>

            <div className="space-y-6">
              <div>
                <Label htmlFor="tone">Default Tone</Label>
                <Select value={settings.defaultTone} onValueChange={(value) => setSettings({ ...settings, defaultTone: value })}>
                  <SelectTrigger id="tone">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="casual">Casual</SelectItem>
                    <SelectItem value="informative">Informative</SelectItem>
                    <SelectItem value="persuasive">Persuasive</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="length">Default Length</Label>
                <Select value={settings.defaultLength} onValueChange={(value) => setSettings({ ...settings, defaultLength: value })}>
                  <SelectTrigger id="length">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="short">Short</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="long">Long</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ x: 4 }}
              >
                <Checkbox
                  id="auto-publish"
                  checked={settings.autoPublish}
                  onCheckedChange={(checked) => setSettings({ ...settings, autoPublish: checked as boolean })}
                />
                <Label htmlFor="auto-publish" className="cursor-pointer">
                  Auto-publish approved blogs
                </Label>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg border border-gray-200 p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="mb-6">Agent Configuration</h3>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <Label>Max Concurrent Agents</Label>
                  <motion.span 
                    className="text-sm text-gray-600"
                    key={settings.maxAgents}
                    initial={{ scale: 1.5, color: '#3b82f6' }}
                    animate={{ scale: 1, color: '#4b5563' }}
                  >
                    {settings.maxAgents}
                  </motion.span>
                </div>
                <Slider
                  value={[settings.maxAgents]}
                  onValueChange={([value]) => setSettings({ ...settings, maxAgents: value })}
                  min={5}
                  max={50}
                  step={5}
                />
                <p className="text-sm text-gray-500 mt-2">
                  Controls how many AI agents can run simultaneously
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <Label>Agent Timeout (seconds)</Label>
                  <motion.span 
                    className="text-sm text-gray-600"
                    key={settings.timeout}
                    initial={{ scale: 1.5, color: '#3b82f6' }}
                    animate={{ scale: 1, color: '#4b5563' }}
                  >
                    {settings.timeout}s
                  </motion.span>
                </div>
                <Slider
                  value={[settings.timeout]}
                  onValueChange={([value]) => setSettings({ ...settings, timeout: value })}
                  min={30}
                  max={300}
                  step={30}
                />
                <p className="text-sm text-gray-500 mt-2">
                  Maximum time an agent can run before timing out
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button type="submit" className="w-full">
              <Save className="w-4 h-4 mr-2" />
              Save Settings
            </Button>
          </motion.div>
        </form>
      </div>
    </div>
  );
}