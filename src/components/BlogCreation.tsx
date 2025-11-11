import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Rocket, Sparkles } from 'lucide-react';
import { Progress } from './ui/progress';

export function BlogCreation() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({
    topic: '',
    audience: 'general',
    tone: 'professional',
    length: 'medium',
    seoFocus: true,
    includeImages: true,
    socialMedia: true,
    analytics: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setProgress(0);
    setShowPreview(false);

    const phases = [
      'Ideation & Planning',
      'Research & Structuring',
      'SEO & Keyword Preparation',
      'Drafting & Content Generation',
      'Content Enrichment',
      'SEO Optimization & Linking',
      'Editing & Validation',
      'Plagiarism Check',
      'Publishing Preparation',
    ];

    for (let i = 0; i < phases.length; i++) {
      setCurrentPhase(phases[i]);
      setProgress(((i + 1) / phases.length) * 100);
      await new Promise(resolve => setTimeout(resolve, 800));
    }

    setIsGenerating(false);
    setShowPreview(true);
  };

  return (
    <div>
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2>Create New Blog</h2>
        <p className="text-gray-600 mt-1">Configure and generate your blog with AI agents</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <motion.form 
            onSubmit={handleSubmit} 
            className="bg-white rounded-lg border border-gray-200 p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="mb-6">Blog Configuration</h3>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Label htmlFor="topic">Blog Topic</Label>
                <Input
                  id="topic"
                  placeholder="Enter your blog topic..."
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  required
                />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Label htmlFor="audience">Target Audience</Label>
                  <Select value={formData.audience} onValueChange={(value) => setFormData({ ...formData, audience: value })}>
                    <SelectTrigger id="audience">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General</SelectItem>
                      <SelectItem value="technical">Technical</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="academic">Academic</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Label htmlFor="tone">Tone</Label>
                  <Select value={formData.tone} onValueChange={(value) => setFormData({ ...formData, tone: value })}>
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
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Label htmlFor="length">Desired Length</Label>
                <Select value={formData.length} onValueChange={(value) => setFormData({ ...formData, length: value })}>
                  <SelectTrigger id="length">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="short">Short (500-800 words)</SelectItem>
                    <SelectItem value="medium">Medium (800-1500 words)</SelectItem>
                    <SelectItem value="long">Long (1500+ words)</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ x: 4 }}
                  >
                    <Checkbox
                      id="seo"
                      checked={formData.seoFocus}
                      onCheckedChange={(checked) => setFormData({ ...formData, seoFocus: checked as boolean })}
                    />
                    <Label htmlFor="seo" className="cursor-pointer">SEO Optimization</Label>
                  </motion.div>

                  <motion.div 
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    whileHover={{ x: 4 }}
                  >
                    <Checkbox
                      id="images"
                      checked={formData.includeImages}
                      onCheckedChange={(checked) => setFormData({ ...formData, includeImages: checked as boolean })}
                    />
                    <Label htmlFor="images" className="cursor-pointer">Include Images (Pexels)</Label>
                  </motion.div>
                </div>

                <div className="space-y-4">
                  <motion.div 
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                    whileHover={{ x: 4 }}
                  >
                    <Checkbox
                      id="social"
                      checked={formData.socialMedia}
                      onCheckedChange={(checked) => setFormData({ ...formData, socialMedia: checked as boolean })}
                    />
                    <Label htmlFor="social" className="cursor-pointer">Generate Social Media Posts</Label>
                  </motion.div>

                  <motion.div 
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 }}
                    whileHover={{ x: 4 }}
                  >
                    <Checkbox
                      id="analytics"
                      checked={formData.analytics}
                      onCheckedChange={(checked) => setFormData({ ...formData, analytics: checked as boolean })}
                    />
                    <Label htmlFor="analytics" className="cursor-pointer">Enable Analytics Tracking</Label>
                  </motion.div>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button type="submit" className="w-full" disabled={isGenerating}>
                  <Rocket className="w-4 h-4 mr-2" />
                  {isGenerating ? 'Creating Blog...' : 'Create Blog'}
                </Button>
              </motion.div>
            </div>
          </motion.form>

          <AnimatePresence>
            {showPreview && (
              <motion.div 
                className="mt-6 bg-white rounded-lg border border-gray-200 p-6"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
              >
                <motion.div 
                  className="flex items-center gap-2 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-5 h-5 text-green-600" />
                  </motion.div>
                  <h3 className="text-green-600">Blog Created Successfully!</h3>
                </motion.div>

                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Label>Title</Label>
                    <p className="mt-1">{formData.topic}: A Comprehensive Guide</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Label>Meta Description</Label>
                    <p className="text-gray-600 mt-1">Learn everything about {formData.topic.toLowerCase()} in this detailed guide...</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Label>Content Preview</Label>
                    <Textarea
                      value={`# ${formData.topic}: A Comprehensive Guide\n\nIn today's rapidly evolving landscape, ${formData.topic.toLowerCase()} has become increasingly important...\n\n## Introduction\n\nThis comprehensive guide will explore the key aspects of ${formData.topic.toLowerCase()}...\n\n## Key Points\n\n1. Understanding the fundamentals\n2. Best practices and implementation\n3. Future trends and considerations`}
                      readOnly
                      rows={12}
                      className="mt-1"
                    />
                  </motion.div>

                  <motion.div 
                    className="flex gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button variant="outline" className="w-full">Edit Blog</Button>
                    </motion.div>
                    <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full">Publish Now</Button>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="space-y-6">
          <AnimatePresence>
            {isGenerating && (
              <motion.div 
                className="bg-white rounded-lg border border-gray-200 p-6"
                initial={{ opacity: 0, scale: 0.9, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
              >
                <h3 className="mb-4">Generation Progress</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Progress</span>
                      <motion.span 
                        className="text-sm"
                        key={Math.round(progress)}
                        initial={{ scale: 1.5, color: '#3b82f6' }}
                        animate={{ scale: 1, color: '#000' }}
                      >
                        {Math.round(progress)}%
                      </motion.span>
                    </div>
                    <Progress value={progress} />
                  </div>

                  {currentPhase && (
                    <motion.div 
                      className="p-4 bg-blue-50 rounded-lg border border-blue-200"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      key={currentPhase}
                    >
                      <p className="text-sm text-blue-900">
                        Executing: <span>{currentPhase}</span>
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div 
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="mb-3">How It Works</h3>
            
            <div className="space-y-3 text-sm">
              <motion.div 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ x: 4 }}
              >
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">1</div>
                <p className="text-gray-700">Configure your blog settings and preferences</p>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ x: 4 }}
              >
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">2</div>
                <p className="text-gray-700">169 AI agents work through 18 specialized phases</p>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ x: 4 }}
              >
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">3</div>
                <p className="text-gray-700">Review and publish your optimized blog content</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}