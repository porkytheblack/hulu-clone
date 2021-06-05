import Image from 'next/image'
import {HomeIcon, BadgeCheckIcon, CollectionIcon, LightningBoltIcon, SearchIcon, UserIcon
        } from '@heroicons/react/outline'
import HeaderItem from './HeaderItem'
function Header() {
    return (
        <div className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="HOME" Icon={HomeIcon} />
                <HeaderItem title="TRENDING" Icon={BadgeCheckIcon} />
                <HeaderItem title="VERIFIED" Icon={CollectionIcon} />
                <HeaderItem title="COLLECTIONS" Icon={LightningBoltIcon} />
                <HeaderItem title="SEARCH" Icon={SearchIcon} />
                <HeaderItem title="ACCOUNT" Icon={UserIcon} />
            </div>
            <Image
            width={200}
            height={100}
              src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" />
        </div>
    )
}

export default Header
