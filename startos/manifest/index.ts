import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'manifold-fedimint-guardian',
  title: 'Manifold Fedimint Guardian',
  license: 'MIT',
  packageRepo:
    'https://github.com/Start9-Community/manifold-fedimint-guardian-startos',
  upstreamRepo: 'https://github.com/fedibtc/manifold',
  marketingUrl: 'https://manifold.fedi.xyz/',
  donationUrl: null,
  description: { short, long },
  volumes: ['main'],
  images: {
    fman: {
      source: { dockerBuild: {} },
      arch: ['x86_64', 'aarch64'],
      emulateMissing: false,
    },
  },
})
