"use client"

import React, { useState, useEffect } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

import { Heading, Text, Flex, Button, Grid, Icon, InlineCode, Logo, Background, LetterFx } from '@/once-ui/components';
import Link from 'next/link';

export default function Home() {

	const links = [
		{
			href: "https://once-ui.com/docs/theming",
			title: "Sobre Mí",
		},
		{
			href: "https://once-ui.com/docs/theming",
			title: "Proyectos",
		},
		{
			href: "https://once-ui.com/docs/theming",
			title: "Habilidades",
		},
		{
			href: "#contacto",
			title: "Contacto",
		},
		];

		return (
			<Flex
			fillWidth paddingTop="l" paddingX="l"
			direction="column" alignItems="center" flex={1}>
			
			{/* Menú de navegación horizontal */}
			<Flex
				as="nav"
				fillWidth
				justifyContent="center"
				background="neutral-medium" // Color de fondo del menú
				paddingY="m"
				style={{ position: 'fixed', top: 0, zIndex: 1000 }}>
				{links.map((link) => (
					<Link key={link.href} href={link.href}>
						<a style={{ color: 'white', margin: '0 20px', textDecoration: 'none', fontWeight: 'bold' }}>
							{link.title}
						</a>
					</Link>
				))}
			</Flex>

			{/* Contenido principal de la página */}
			<Flex
				position="relative"
				as="section" overflow="hidden"
				fillWidth minHeight="0" maxWidth={68}
				direction="column" alignItems="center" flex={1}>
				<Background dots={false} />
				<Flex
					as="main"
					direction="column" justifyContent="center"
					fillWidth fillHeight padding="l" gap="l">
					
					{/* Aquí va el contenido actual */}
					<Flex mobileDirection="column" fillWidth gap="24">
						<Flex
							position="relative"
							flex={2} paddingTop="56" paddingX="xl"
							direction="column"
							justifyContent="center" 
							alignItems="center" 
							style={{ marginBottom: '50px', marginTop: '80px' }} // Ajustar margen superior por el menú fijo
						>
							<Image 
								src="/images/yo.png"
								alt="Jimmy Meza"
								width={250}
								height={300} 
								style={{ borderRadius: '50%' }}
							/>
						</Flex>

						<Flex
							position="relative"
							flex={4} gap="24" marginBottom="104"
							direction="column">
							<Flex direction="column" alignItems="center" gap="16">
								<InlineCode className="shadow-m" style={{
									marginTop: '70px',
									width: 'fit-content',
									padding: 'var(--static-space-8) var(--static-space-16)',
									backdropFilter: 'blur(var(--static-space-1))',
									fontSize: '24px'
								}}>
									Hola soy, <span className="brand-on-background-medium" style={{fontSize: '24px'}}>Jimmy Meza</span>
								</InlineCode>
							</Flex>
							
							<Heading wrap="balance" variant="display-strong-s">
								<span className="font-code">
									<LetterFx trigger="instant" speed="slow">QA Tester</LetterFx>
								</span>
							</Heading>
							
							<Button href="public/images/QA-JimmyMeza.pdf" suffixIcon="chevronRight" variant="secondary">
							    Descargar CV
							</Button>

								{/* Nuevo texto agregado */}
						        <Text><hr>
						          Soy Jimmy Meza - QA Tester Junior. Desde que comencé mi viaje en el mundo del aseguramiento de calidad. 
						          Mi enfoque detallista y mi curiosidad me han permitido desarrollar habilidades sólidas en la creación 
						          y ejecución de casos de prueba, así como en la gestión de incidencias y reporte de bugs utilizando herramientas como Jira. 
						          Estoy en constante aprendizaje, buscando siempre nuevas tecnologías y metodologías que me permitan mejorar la calidad del software 
						          de manera más eficiente y efectiva.
						        </Text>
						        <Text>
						          <strong>¿Qué encontrarás aquí?</strong>
						          <ul>
						            <li>Pruebas Manuales: Ejemplos de casos de prueba y resultados de pruebas manuales.</li>
						            <li>Documentación Técnica: Casos de estudio que destacan mi capacidad para documentar procesos de prueba y resultados.</li>
						          </ul>
						        </Text>
						        <Text>
						          Estoy emocionado de compartir mi trabajo contigo y espero que encuentres valor en los proyectos presentados aquí. 
						          No dudes en explorar mis proyectos y contactarme. Gracias por visitar mi portafolio y espero que disfrutes explorándolo tanto 
						          como yo disfruté creándolo.
						        </Text>
							
						</Flex>
					</Flex>

					{/* Sección de enlaces de proyectos */}
					<Grid radius="l" border="neutral-medium" borderStyle="solid-1" columns="repeat(3, 1fr)" tabletColumns="1col" mobileColumns="1col" fillWidth>
						{links.map((link) => (
							<Link target="_blank" style={{ padding: 'var(--responsive-space-l)' }} key={link.href} href={link.href}>
								<Flex fillWidth paddingY="8" gap="8" direction="column">
									<Flex fillWidth gap="12" alignItems="center">
										<Text variant="body-strong-m" onBackground="neutral-strong">{link.title}</Text>
										<Icon size="s" name="arrowUpRight" />
									</Flex>
								</Flex>
							</Link>
						))}
					</Grid>
				</Flex>
			</Flex>
			
			{/* Footer */}
			<Flex as="footer" position="relative" fillWidth paddingX="l" paddingY="m" justifyContent="space-between">
				<Text variant="body-default-s" onBackground="neutral-weak">© 2024 Jimmy Meza</Text>
				<Flex gap="12">
					<Button href="https://github.com/once-ui-system/nextjs-starter" prefixIcon="github" size="s" variant="tertiary">GitHub</Button>
					<Button href="https://www.linkedin.com/in/jimmy-meza-8a5a66237" prefixIcon="linkedin" size="s" variant="tertiary" target="_blank" rel="noopener noreferrer">Linkedin</Button>
				</Flex>
			</Flex>
		</Flex>
	);
}
