import { TrendingEntry } from 'reducers/trendingReducer'

export function fixTitle(data): TrendingEntry {
  let newTitle = data.title

  if (!newTitle) {
    newTitle = data.name
  }

  return { ...data, ...{ title: newTitle } }
}
