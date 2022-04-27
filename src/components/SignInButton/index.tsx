import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/react'

import styles from './styles.module.scss'

export  const  SignInButton = () => {
  const { data: session } = useSession()

  return session ? (
    <button 
      type="button"
      className={styles.githubButton}
      onClick={() => signOut()}
    >
      <img src={session.user.image} alt="User image" />
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button 
      type="button"
      className={styles.githubButton}
      onClick={() => signIn('github')}
    >
      <FaGithub color="#eba417" />
      Sign In with Github
    </button>
  );
}