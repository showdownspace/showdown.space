let flagSet: Set<string> | undefined

export function isQueryFlagEnabled(flagName: string) {
  if (!flagSet) {
    flagSet =
      typeof window !== 'undefined'
        ? new Set(
            (new URLSearchParams(window.location.search).get('flags') || '')
              .split(',')
              .filter(Boolean),
          )
        : new Set()
  }
  return flagSet.has(flagName)
}
