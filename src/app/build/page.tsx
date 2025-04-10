import {Button} from "@/components/ui/button";
import {FaGithub} from "react-icons/fa";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Build | XOps Lab",
  description: "Open-source projects and community contributions at XOps Lab.",
};

// const projects = [
//   {
//     name: "ML Pipeline Framework",
//     description: "An open-source framework for building and deploying ML pipelines",
//     tags: ["Python", "ML", "DevOps"],
//     stars: 124,
//     forks: 32,
//     link: "https://github.com/example/ml-pipeline",
//   },
//   {
//     name: "AWS CloudFormation Templates",
//     description: "Collection of CloudFormation templates for ML infrastructure",
//     tags: ["AWS", "IaC", "CloudFormation"],
//     stars: 89,
//     forks: 21,
//     link: "https://github.com/example/aws-cf-templates",
//   },
//   {
//     name: "DeployML",
//     description: "Streamlined deployment of ML models to production environments",
//     tags: ["Python", "Docker", "Kubernetes"],
//     stars: 215,
//     forks: 45,
//     link: "https://github.com/example/deployml",
//   },
//   {
//     name: "LLM-App-Template",
//     description: "Starter template for building LLM-powered applications",
//     tags: ["LLM", "TypeScript", "Next.js"],
//     stars: 178,
//     forks: 34,
//     link: "https://github.com/example/llm-app-template",
//   },
// ];

export default function BuildPage() {
  return (
    <div className="pt-16">
      {/* Hero Section with Background */}
      <div className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 ">
        <div className="container mx-auto py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-slate-800 dark:from-blue-400 dark:to-indigo-400">
            Build with XOps Lab
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explore and contribute to our open-source projects
            </p>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
        {projects.map((project, i) => (
          <Card key={i} className="overflow-hidden hover:shadow-md transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FaGithub className="text-muted-foreground" />
                {project.name}
              </CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, j) => (
                  <Badge key={j} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <FaStar className="mr-1" />
                  {project.stars}
                </div>
                <div className="flex items-center">
                  <FaCodeBranch className="mr-1" />
                  {project.forks}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" variant="outline">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="mr-2" /> View on GitHub
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div> */}

      {/* Contribution Section */}
      <div className="max-w-3xl mx-auto text-center py-8 px-4 rounded-lg border bg-slate-50 dark:bg-slate-900">
        <h2 className="text-2xl font-bold mb-4">Want to Contribute?</h2>
        <p className="mb-6">
          We welcome contributions from community members of all skill levels. Whether it's fixing bugs, adding
          features, or improving documentation, every contribution counts!
        </p>
        <Button asChild size="lg">
          <a href="https://github.com/xopslab" target="_blank" rel="noopener noreferrer">
            <FaGithub className="mr-2" /> Contribute Now
          </a>
        </Button>
      </div>
    </div>
  );
}
