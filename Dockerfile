# StartOS and the guardian's user lookup need these files in the minimal Nix image.
FROM ghcr.io/fedibtc/manifold-fman:cbc4c503ccd4e623a8b8dc380d488288a77d893a@sha256:3790a70a0580a050a1fd7a889a3e4cfdf35d83d576efed173191f1fcfba0dd84
COPY assets/etc/ /etc/
