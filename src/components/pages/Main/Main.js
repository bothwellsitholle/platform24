import React, { useState } from 'react'
import Blog from '../../containers/Blog'
import Welcome from '../../containers/WelcomeMessage'
import MembershipForm from '../../containers/MembershipForm'
import Grid from "@material-ui/core/Grid";


const Main = () => {
  const [showBlog, setShowBlog] = useState(false)
  return (
    <Grid container spacing={0} >
      <Grid item xs={12} md={5}>
        <Welcome showBlogHandler={() => setShowBlog((prev) => !prev)} />
      </Grid>
      <Grid item xs={12} md={7}>
      {showBlog ? <Blog /> : <MembershipForm />}
      </Grid>
    </Grid>
  )
}

export default Main
