'use client';

import { motion, easeOut } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, FileText, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';
import { projectsData } from '@/data/projects';

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: easeOut }
    }
};

// ============================================================================
// SCREENSHOTS GRID COMPONENT
// ============================================================================

interface ImageGridProps {
    images: string[];
    title: string;
}

function ImageGrid({ images, title }: ImageGridProps) {
    // Display up to 4 images
    const displayImages = images.slice(0, 4);

    const getGridClass = () => {
        switch (displayImages.length) {
            case 1: return 'grid-cols-1';
            case 2: return 'grid-cols-1 md:grid-cols-2';
            case 3: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
            case 4: return 'grid-cols-1 md:grid-cols-2';
            default: return 'grid-cols-1 md:grid-cols-2';
        }
    };

    return (
        <div className={`grid ${getGridClass()} gap-4`}>
            {displayImages.map((img, index) => (
                <div
                    key={index}
                    className="relative h-64 md:h-80 rounded-xl overflow-hidden group border border-gray-800/50"
                >
                    <Image
                        src={img}
                        alt={`${title} - Screenshot ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <div className="text-sm text-gray-300">Screenshot {index + 1}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

// ============================================================================
// PROJECT DETAIL PAGE
// ============================================================================


export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const project = projectsData.find(p => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="bg-[#0A0A0A] text-white min-h-screen">
            {/* Background Effects */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 md:mb-12"
                >
                    <Link
                        href="/#portfolio"
                        className="inline-flex items-center gap-3 text-gray-400 hover:text-white transition-all group"
                    >
                        <div className="w-10 h-10 rounded-full bg-gray-900/50 border border-gray-800 flex items-center justify-center group-hover:border-purple-500/50 group-hover:bg-purple-900/10 transition-all">
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        </div>
                        <span className="font-medium">Back to Portfolio</span>
                    </Link>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-12 md:space-y-16"
                >
                    {/* Hero Image */}
                    <motion.div variants={itemVariants} className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-gray-800/50">
                        <Image
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </motion.div>

                    {/* Title and Meta Info */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                            <div className="space-y-4">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-900/50 border border-gray-800 rounded-full text-sm text-gray-400 mb-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        Featured Project
                                    </div>
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                        {project.title}
                                    </h1>
                                </div>
                                <p className="text-xl text-gray-400 max-w-3xl">
                                    {project.overview.split('.')[0]}.
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                                {project.liveDemo && (
                                    <a
                                        href={project.liveDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all group min-w-[160px]"
                                    >
                                        <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        Live Demo
                                    </a>
                                )}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl font-semibold hover:border-purple-500/50 hover:bg-gray-800/50 transition-all group min-w-[160px]"
                                    >
                                        <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        View Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Left Column - Content */}
                        <motion.div variants={itemVariants} className="lg:col-span-2 space-y-12">
                            <section className="space-y-4">
                                <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                                    <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
                                    Project Overview
                                </h2>
                                <div className="text-gray-300 text-lg leading-relaxed space-y-4">
                                    {project.overview.split('. ').map((sentence, idx) => (
                                        sentence && <p key={idx}>{sentence.trim()}.</p>
                                    ))}
                                </div>
                            </section>

                            {/* Features */}
                            <section className="space-y-4">
                                <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                                    <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
                                    Key Features
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {project.features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="p-4 bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-purple-500/30 transition-all group"
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-purple-500/20 transition-colors">
                                                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                                                </div>
                                                <span className="text-gray-300 group-hover:text-white transition-colors">
                                                    {feature}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Image Grid */}
                            <motion.div variants={itemVariants} className="space-y-4">
                                <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                                    <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
                                    Screenshots
                                </h2>
                                <ImageGrid images={project.screenshots} title={project.title} />
                            </motion.div>
                        </motion.div>

                        {/* Right Column - Sidebar */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            {/* Tech Stack */}
                            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                                    <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
                                    Tech Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-2 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border border-purple-500/20 rounded-lg text-purple-300 font-medium hover:border-purple-500/40 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* My Role */}
                            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                                    <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
                                    My Role
                                </h3>
                                <ul className="space-y-3">
                                    {project.myRole.map((role, index) => (
                                        <li key={index} className="flex items-start gap-3 text-gray-300">
                                            <div className="w-5 h-5 rounded-full bg-indigo-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                                            </div>
                                            <span>{role}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Project Links */}
                            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                                    <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
                                    Project Links
                                </h3>
                                <div className="space-y-3">
                                    {project.liveDemo && (
                                        <a
                                            href={project.liveDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors group"
                                        >
                                            <div className="flex items-center gap-3">
                                                <ExternalLink className="w-5 h-5 text-purple-400" />
                                                <span>Live Demo</span>
                                            </div>
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors group"
                                        >
                                            <div className="flex items-center gap-3">
                                                <Github className="w-5 h-5 text-gray-400" />
                                                <span>GitHub Repository</span>
                                            </div>
                                        </a>
                                    )}
                                    {project.documentation && (
                                        <a
                                            href={project.documentation}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors group"
                                        >
                                            <div className="flex items-center gap-3">
                                                <FileText className="w-5 h-5 text-blue-400" />
                                                <span>Documentation</span>
                                            </div>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom CTA */}
                    <motion.div variants={itemVariants} className="pt-8 border-t border-gray-800/30">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
                            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                                Check out my other projects or get in touch to discuss how we can work together.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/#portfolio"
                                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all"
                                >
                                    View All Projects
                                </Link>
                                <Link
                                    href="/contact"
                                    className="px-8 py-3 bg-gray-900 border border-gray-800 rounded-xl font-semibold hover:border-purple-500/50 hover:bg-gray-800/50 transition-all"
                                >
                                    Get In Touch
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}