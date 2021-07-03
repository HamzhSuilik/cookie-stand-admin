import Link from 'next/link'

export default function Overview() {
    return (
        <div>
            <h1>Overview</h1>
            <Link href="/">
                <a>Return to main page</a>
            </Link>
        </div>
        
    )
}