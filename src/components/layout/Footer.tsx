import { Bug, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';
import ExternalLink from 'next/link';

import { Link } from '@/lib/navigation';

import { Facebook } from '@/components/assets/icons/Facebook';
import { Github } from '@/components/assets/icons/Github';
import { Instagram } from '@/components/assets/icons/Instagram';
import { Slack } from '@/components/assets/icons/Slack';
import { IDILogo } from '@/components/assets/sponsors/IDILogo';
import { KiDLogo } from '@/components/assets/sponsors/KiDLogo';
import { LogoLink } from '@/components/layout/LogoLink';
import { Nav } from '@/components/layout/Nav';
import { Button } from '@/components/ui/Button';

function Footer() {
  const t = useTranslations('layout');
  const year = new Date().getFullYear();
  return (
    <footer className='mx-auto w-full max-w-screen-2xl border-t border-border/40 bg-background/95 px-11 py-10 text-sm md:px-16 lg:px-24'>
      <div className='grid grid-cols-1 gap-x-4 gap-y-12 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
        <div>
          <div className='flex'>
            <LogoLink className='justify-start' />
          </div>
          <p className='ml-2 leading-tight'>
            <strong>{t('openingHours')}:</strong>
            <br />
            <span>{t('allWeekdays')}, 10:15-18:00</span>
            <br />
            <br />
            <Button asChild variant='link' size='none'>
              <ExternalLink
                href='https://use.mazemap.com/#v=1&zlevel=2&center=10.404406,63.415418&zoom=18&sharepoitype=poi&sharepoi=1000391296&campusid=1'
                prefetch={false}
                target='_blank'
                rel='noopener noreferrer'
              >
                Realfagbygget, A-blokka
              </ExternalLink>
            </Button>
            <br />
            Høgskoleringen 5<br />
            7034 Trondheim
          </p>
        </div>
        <div>
          <h4>{t('socialMedia')}</h4>
          <ul className='grid grid-flow-row grid-cols-2-auto justify-start text-foreground/80 sm:grid-cols-3-auto xl:grid-flow-col xl:grid-cols-none'>
            <li>
              <Button asChild variant='ghost' size='sm-icon'>
                <ExternalLink
                  href='mailto:hackerspace-styret@idi.ntnu.no'
                  aria-label={t('sendAnEmail')}
                >
                  <Mail className='h-4 w-4' />
                </ExternalLink>
              </Button>
            </li>
            <li>
              <Button asChild variant='ghost' size='sm-icon'>
                <ExternalLink
                  href='https://hackerspace-ntnu.slack.com/'
                  prefetch={false}
                  aria-label={t('visitSlack')}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Slack className='h-4 w-4' />
                </ExternalLink>
              </Button>
            </li>
            <li>
              <Button asChild variant='ghost' size='sm-icon'>
                <ExternalLink
                  href='https://www.facebook.com/hackerspacentnu'
                  prefetch={false}
                  aria-label={t('visitFacebook')}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Facebook className='h-4 w-4' />
                </ExternalLink>
              </Button>
            </li>
            <li>
              <Button asChild variant='ghost' size='sm-icon'>
                <ExternalLink
                  href='https://github.com/hackerspace-ntnu/'
                  prefetch={false}
                  aria-label={t('visitGithub')}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Github className='h-4 w-4' />
                </ExternalLink>
              </Button>
            </li>
            <li>
              <Button asChild variant='ghost' size='sm-icon'>
                <ExternalLink
                  href='https://www.instagram.com/hackerspacentnu/'
                  prefetch={false}
                  aria-label={t('visitInstagram')}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Instagram className='h-4 w-4' />
                </ExternalLink>
              </Button>
            </li>
          </ul>
        </div>
        <div>
          <h4>{t('links')}</h4>
          <Nav
            className='ml-2 mt-2 space-y-1.5'
            t={{
              news: t('news'),
              events: t('events'),
              about: t('about'),
            }}
          />
        </div>
        <div>
          <h4>{t('utilities')}</h4>
          <p className='ml-2 [&:not(:first-child)]:mt-0'>
            <Button asChild variant='link' size='none'>
              <Link href='/'>{t('signIn')}</Link>
            </Button>
            <br />
            {t('haveYouFoundA')} <Bug className='inline h-4 w-4' />?
            <br />
            {t.rich('utilitiesDescription', {
              code: (children) => (
                <code className='inline-block text-xs'>{children}</code>
              ),
              MailLink: () => (
                <Button className='inline' asChild variant='link' size='none'>
                  <ExternalLink
                    href='mailto:hackerspace-dev@idi.ntnu.no'
                    aria-label={t('sendAnEmail')}
                  >
                    <Mail className='inline h-4 w-4' />
                  </ExternalLink>
                </Button>
              ),
              SlackLink: (children) => (
                <Button className='inline' asChild variant='link' size='none'>
                  <ExternalLink
                    href='https://hackerspace-ntnu.slack.com/archives/CDK99FYTY'
                    prefetch={false}
                    aria-label={t('visitSlack')}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {children}
                  </ExternalLink>
                </Button>
              ),
              GithubLink: (children) => (
                <Button className='inline' asChild variant='link' size='none'>
                  <ExternalLink
                    href='https://github.com/hackerspace-ntnu/website-frontend/issues'
                    prefetch={false}
                    aria-label={t('visitGithub')}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {children}
                  </ExternalLink>
                </Button>
              ),
            })}
          </p>
        </div>
      </div>
      <nav className='py-20'>
        <ul className='flex flex-col justify-center gap-6 sm:flex-row md:gap-10 lg:gap-20 xl:gap-40'>
          <li>
            <Button asChild variant='none' size='none'>
              <ExternalLink
                href={t('NTNUIDIURL')}
                prefetch={false}
                target='_blank'
                rel='noopener noreferrer'
              >
                <IDILogo className='p-6' title={t('NTNUIDI')} />
              </ExternalLink>
            </Button>
          </li>
          <li>
            <Button asChild variant='none' size='none'>
              <ExternalLink
                href='https://www.ntnu.no/ie/kid/'
                prefetch={false}
                target='_blank'
                rel='noopener noreferrer'
              >
                <KiDLogo className='p-6' title={t('NTNUKiD')} />
              </ExternalLink>
            </Button>
          </li>
        </ul>
      </nav>
      <p className='text-center'>
        {t('copyright')} &copy; {year}, Hackerspace NTNU.{' '}
        {t('allRightsReserved')}.
      </p>
    </footer>
  );
}

export { Footer };
