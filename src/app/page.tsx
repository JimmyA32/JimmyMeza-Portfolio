"use client";

import React from 'react';
import Image from 'next/image';
import { Heading, Text, Flex, Button, Grid, Icon, InlineCode, Background, LetterFx } from '@/once-ui/components';
import Link from 'next/link';
import Header from '@/once-ui/components/Header';

export default function Home() {
  const links = [
    {
      href: "https://once-ui.com/docs/theming",
      title: "Sobre Mi",
      description: "Style your app in minutes.",
    },
    {
      href: "https://once-ui.com/docs/flexComponent",
      title: "Proyectos",
      description: "Build responsive layouts.",
    },
    {
      href: "https://once-ui.com/docs/typography",
      title: "Habilidades",
      description: "Scale text automatically.",
    },
  ];

  return (
    <Flex 
	    fillWidth paddingTop="l" 
	    paddingX="l" 
	    direction="column" 
	    alignItems="center" 
	    flex={1}
	    >
      <Background dots={false} />
      
      {/* Menú horizontal */}
      <Header />

      <Flex 
	      position="relative" 
	      as="section" 
	      overflow="hidden" 
	      fillWidth minHeight="0" 
	      maxWidth={68} 
	      direction="column" 
	      alignItems="center" 
	      flex={1}
	      >
        <Flex 
		as="main" 
		direction="column" 
		justifyContent="center" 
		fillWidth fillHeight 
		padding="l" 
		gap="l"
		>
          <Flex 
		  mobileDirection="column" 
		  fillWidth gap="24"
		  >
            <Flex 
		    position="relative" 
		    flex={2} 
		    paddingTop="56" 
		    paddingX="xl" 
		    direction="column" 
		    justifyContent="center" 
		    alignItems="center" 
		    style={{ marginBottom: '50px', marginTop: '-45px' }}
		    >
              <Image src="/images/yo.png" alt="Jimmy Meza" width={250} height={300} style={{ borderRadius: '50%' }} />
            </Flex>
            <Flex 
		    position="relative" 
		    flex={4} 
		    gap="24" 
		    marginBottom="104" 
		    direction="column"
		    >
              <Flex 
		      direction="column" 
		      alignItems="center" 
		      gap="16"
		      >
                <InlineCode
			className="shadow-m" 
			style={{ marginTop: '70px', width: 'fit-content', padding: 'var(--static-space-8) var(--static-space-16)', backdropFilter: 'blur(var(--static-space-1))', fontSize: '24px' }}
			>
                  Hola soy, <span className="brand-on-background-medium" style={{fontSize: '24px'}}>Jimmy Meza</span>
                </InlineCode>
              </Flex>
              <Heading 
		      wrap="balance" 
		      variant="display-strong-s"
		      >
                <span 
			className="font-code">
                  <LetterFx 
			  trigger="instant" 
			  speed="slow"
			  >
                    QA Tester
                  </LetterFx>
                </span>
              </Heading>
              <Button 
		      href="https://once-ui.com/docs" 
		      suffixIcon="chevronRight" 
		      variant="secondary"
		      >
                Read docs
              </Button>
            </Flex>
          </Flex>
          <Grid 
		  radius="l" 
		  border="neutral-medium" 
		  borderStyle="solid-1" 
		  columns="repeat(3, 1fr)" 
		  tabletColumns="1col" 
		  mobileColumns="1col" fillWidth
		  >
            {links.map((link) => (
              <Link 
		      target="_blank" 
		      style={{ padding: 'var(--responsive-space-l)' }} 
		      key={link.href} 
		      href={link.href}
		      >
                <Flex 
			fillWidth paddingY="8" 
			gap="8" 
			direction="column"
			>
                  <Flex 
			  fillWidth gap="12" 
			  alignItems="center"
			  >
                    <Text 
			    variant="body-strong-m" 
			    onBackground="neutral-strong">{link.title}</Text>
                    <Icon size="s" name="arrowUpRight" />
                  </Flex>
                  <Text 
			  variant="body-default-s" 
			  onBackground="neutral-weak">{link.description}</Text>
                </Flex>
              </Link>
            ))}
          </Grid>
        </Flex>
      </Flex>
      
      <Flex as="footer" position="relative" fillWidth paddingX="l" paddingY="m" justifyContent="space-between">
        <Text variant="body-default-s" onBackground="neutral-weak">© 2024 Jimmy Meza</Text>
        <Flex gap="12">
          <Button 
		  href="https://github.com/once-ui-system/nextjs-starter" 
		  prefixIcon="github" 
		  size="s" 
		  variant="tertiary">GitHub</Button>
          <Button 
		  href="https://www.linkedin.com/in/jimmy-meza-8a5a66237" 
		  prefixIcon="linkedin" 
		  size="s" 
		  variant="tertiary" 
		  target="_blank" 
		  rel="noopener noreferrer">Linkedin</Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
