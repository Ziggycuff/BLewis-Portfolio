import React from 'react';
import '../App.css';

const jobs = [
    {
        company: 'ServiceMinder',
        role: 'Software Engineer',
        period: 'Jun 2025 – Nov 2026',
        summary: 'Field-service operations platform (scheduling, routing, invoicing, proposals, CRM) for franchise service businesses.',
        points: [
            '140+ pull requests to the core C#/.NET web platform',
            'Built Consolidated Invoicing end to end, including PDF statements by email and query tuning that fixed Cloudflare 504s',
            'Overhauled the Online Scheduler: custom fields, proposal templates, dynamic pricing and Canadian postal code support',
            'Added organisation-level MFA enforcement and fixed an MFA bypass vulnerability on mobile',
            'Integrations: CallRail, QuickBooks Online, CyberSource, PaymentPilot, CompanyCam',
            'Built AI developer tooling: a Claude Code PR-review skill, a codebase knowledge base, and AI-assisted E2E test expansion',
        ],
    },
    {
        company: 'Connected Software',
        role: 'Software Engineer',
        period: 'Apr 2024 – Feb 2025',
        summary: 'Health-tech startup building LLM-driven patient-education and clinical-workflow products.',
        points: [
            'ClinicFlow: admin panel with role-based access, Android and iOS push notifications, and Cognito auth fixes through the v1.0 release',
            'CSSA: Pinned Messages and Pinned Message Groups across the client and API',
            'Dolvie: JWT auth upgrade, Play Store deployment and LLM prompt tuning',
            'Managed release branches across 8 product repositories',
        ],
    },
];

function Experience() {
    return (
        <section className="experience" id="experience">
            <div className="experience-content">
                <h2>Experience</h2>
                {jobs.map(job => (
                    <div className="job" key={job.company}>
                        <div className="job-header">
                            <h3>{job.company} <span className="job-role">— {job.role}</span></h3>
                            <span className="job-period">{job.period}</span>
                        </div>
                        <p className="job-summary">{job.summary}</p>
                        <ul>
                            {job.points.map(point => <li key={point}>{point}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;
