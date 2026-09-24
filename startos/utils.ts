export const uiPort = 8181

// Upstream's seat grid is 4 ports per lifetime seat ordinal; 32 covers the first 8 seats.
export const irohFirstPort = 30000
export const irohPortCount = 32

export const passwordSubpath = '.operator-password'
export const passwordVolumePath = `/media/startos/volumes/main/${passwordSubpath}`
export const passwordContainerPath = `/data/${passwordSubpath}`
