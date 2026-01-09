export default function StructuredData() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Rifan Nurfakhri',
        jobTitle: 'Fullstack Web Developer',
        url: 'https://rifanfakhri.vercel.app',
        email: 'fakhririfan86@gmail.com',
        telephone: '+62-895-3316-26561',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Bekasi',
            addressRegion: 'West Java',
            addressCountry: 'Indonesia'
        },
        alumniOf: {
            '@type': 'EducationalOrganization',
            name: 'Telkom University Purwokerto',
            department: 'Informatics Engineering'
        },
        knowsAbout: [
            'Web Development',
            'Fullstack Development',
            'PHP',
            'JavaScript',
            'Laravel',
            'Next.js',
            'React',
            'TypeScript',
            'MySQL',
            'Front-end Development',
            'Back-end Development'
        ],
        sameAs: [
            'https://github.com/RifanFakhri',
            'https://linkedin.com/in/RifanFakhri', // Ganti dengan LinkedIn Anda
            'https://instagram.com/fakhririfan' // Ganti dengan Instagram Anda
        ],
        worksFor: [
            {
                '@type': 'Organization',
                name: 'PT Biro Klasifikasi Indonesia',
                startDate: '2025-10'
            },
            {
                '@type': 'Organization',
                name: 'CodeTag Studio',
                startDate: '2025-07'
            }
        ]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}
