export default function HomePage() {
  return <div />
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/sign-up',
      permanent: false,
    },
  }
}
