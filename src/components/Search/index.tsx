import React, { useState } from 'react'
import Input from 'components/Input'
import Router from 'next/router'

type SearchProps = {
  placeholder: string
}

const Search = ({ placeholder }: SearchProps) => {
  const [inputValue, setInputValue] = useState<string>('')
  const OnSubmit = () => {
    Router.push(`/search/${inputValue}`)
  }
  return (
    <form onSubmit={OnSubmit}>
      <Input
        large
        placeholder={placeholder}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  )
}

export default Search
