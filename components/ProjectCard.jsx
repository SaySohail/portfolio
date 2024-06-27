import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader } from './ui/card';
import { Github, Link2Icon } from 'lucide-react';
import { Badge } from './ui/badge';
import { cn } from "@/utils/cn";

const ProjectCard = ({ project }) => {
  return (
    <Card className='group overflow-hidden relative h-[440px] '>
      <CardHeader className='p-0'>
        {/* image */}
        <div className='relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden'>
          <Image
            
            src={project.image}
            width={500}
            height={500}
            alt=''
            className={cn("absolute bottom-0 shadow-2xl h-full w-full")}
            priority
          />
          {/* btn links */}
          <div className='flex gap-x-4'>
            {/* <Link
              href={project.link}
              className='bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'
            >
              <Link2Icon className='text-white' />
            </Link> */}
            <Link
              href={project.github}
              className='bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300'
            >
              <Github className='text-primary' />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className='h-full px-8 py-6'>

        <p className='text-lg fond-bold mb-1'>{project.name}</p>
        {/* <p className='text-muted-foreground text-lg'>{project.description}</p> */}
      </div>
    </Card>
  );
};

export default ProjectCard;
