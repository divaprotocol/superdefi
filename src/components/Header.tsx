import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Logo } from './Logo'
import { useTheme } from 'next-themes';
const Header = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
  
	useEffect(() => {
	  setMounted(true);
	}, []);
  
	if (!mounted) return null;
	const currentTheme = theme === 'system' ? systemTheme : theme;
	return (
		<>
			<Head>
				<title>SuperDeFi</title>
				<meta name="description" content="SuperDefi" />
				<link rel="icon" href="./favicon.svg" />
			</Head>
			<div className="pt-10 px-16  flex justify-between items-center">
				<Link href={'/'}>
						<div>
							<Logo/>
						</div>
				</Link>
				<div className=' flex justify-between'>
					<div className=" font-Inter text-black">
						<Link href="/docs">Docs</Link>
					</div>
					<div className=" ml-10 font-Inter text-black ">
						<Link href="/faq">FAQ</Link>
					</div>
						<div className=" ml-10 " >
					{currentTheme ==='dark'	?	
						(<button
							onClick={() => setTheme('light')}>
							<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M10.4999 19.9999C9.09947 19.9989 7.71483 19.7042 6.43534 19.1349C5.15585 18.5656 4.00994 17.7344 3.07155 16.6949C2.12608 15.6542 1.41273 14.4243 0.978838 13.0868C0.544947 11.7494 0.400433 10.335 0.554883 8.93741C0.803886 6.76242 1.75271 4.72719 3.25852 3.13812C4.76432 1.54905 6.7456 0.492164 8.90405 0.126576C10.2994 -0.0889447 11.7234 -0.0309223 13.0966 0.29741C13.4561 0.389792 13.7845 0.57658 14.0476 0.838444C14.3108 1.10031 14.4992 1.42774 14.5933 1.78685C14.6875 2.14596 14.684 2.5237 14.5832 2.881C14.4823 3.23829 14.2879 3.56216 14.0199 3.81908C10.2199 7.29074 10.5499 12.6891 14.6924 15.8274C14.9853 16.0573 15.2112 16.3615 15.3467 16.7083C15.4821 17.0551 15.5222 17.4319 15.4626 17.7995C15.4031 18.167 15.2461 18.5119 15.008 18.7982C14.77 19.0845 14.4596 19.3018 14.1091 19.4274C12.9439 19.8081 11.7257 20.0013 10.4999 19.9999V19.9999ZM10.5632 1.66658C10.0953 1.66545 9.62809 1.70084 9.16572 1.77241C7.36865 2.07634 5.71893 2.95578 4.46489 4.27835C3.21085 5.60093 2.42035 7.29506 2.21238 9.10574C2.08239 10.2724 2.20219 11.4535 2.56383 12.5703C2.92548 13.6871 3.52068 14.7142 4.30988 15.5832C5.46516 16.8163 6.95345 17.6876 8.59419 18.0914C10.2349 18.4952 11.9576 18.4142 13.5532 17.8582C13.622 17.8325 13.6827 17.789 13.7293 17.7322C13.7759 17.6754 13.8066 17.6073 13.8183 17.5348C13.8301 17.4623 13.8225 17.3879 13.7963 17.3193C13.77 17.2507 13.7262 17.1903 13.6691 17.1441C8.72822 13.4124 8.33572 6.73908 12.8791 2.60324C12.9312 2.55484 12.9688 2.49285 12.9876 2.42425C13.0065 2.35565 13.0058 2.28315 12.9857 2.21491C12.9684 2.14248 12.9316 2.07617 12.8793 2.02314C12.827 1.97012 12.7612 1.9324 12.6891 1.91408C11.993 1.74618 11.2792 1.66308 10.5632 1.66658V1.66658Z" fill="#585F6F"/>
							</svg>
							
						</button>
						) : (<button onClick={() => setTheme('dark')}>
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M19.1667 9.16667L15.7667 9.16667C15.7017 8.70753 15.5817 8.2579 15.4092 7.8275L18.3483 6.12417C18.4466 6.0713 18.5332 5.99926 18.603 5.9123C18.6729 5.82534 18.7246 5.72524 18.7551 5.61793C18.7855 5.51062 18.7942 5.39829 18.7804 5.28759C18.7666 5.17689 18.7308 5.07008 18.675 4.97349C18.6192 4.8769 18.5446 4.79249 18.4556 4.72528C18.3665 4.65806 18.2649 4.6094 18.1567 4.58219C18.0486 4.55498 17.936 4.54976 17.8258 4.56684C17.7155 4.58393 17.6099 4.62298 17.515 4.68167L14.5733 6.3875C14.2921 6.03226 13.9708 5.71069 13.6158 5.42917L15.3208 2.48667C15.4235 2.29588 15.4478 2.0726 15.3887 1.86418C15.3295 1.65575 15.1915 1.47857 15.0039 1.37019C14.8163 1.26181 14.5938 1.23075 14.3837 1.28361C14.1736 1.33647 13.9923 1.46908 13.8783 1.65333L12.1725 4.59083C11.7422 4.4181 11.2925 4.29807 10.8333 4.23333V0.833333C10.8333 0.61232 10.7455 0.400358 10.5893 0.244078C10.433 0.0877974 10.221 0 10 0C9.77899 0 9.56702 0.0877974 9.41074 0.244078C9.25446 0.400358 9.16667 0.61232 9.16667 0.833333V4.23333C8.7075 4.29807 8.25784 4.4181 7.8275 4.59083L6.12417 1.65167C6.01018 1.46742 5.82891 1.3348 5.61879 1.28194C5.40868 1.22909 5.18624 1.26014 4.99863 1.36852C4.81103 1.4769 4.67301 1.65408 4.61384 1.86251C4.55467 2.07093 4.57899 2.29421 4.68167 2.485L6.38667 5.42917C6.03167 5.71069 5.71038 6.03226 5.42917 6.3875L2.4875 4.68167C2.39264 4.62298 2.28695 4.58393 2.17672 4.56684C2.06649 4.54976 1.95394 4.55498 1.84576 4.58219C1.73758 4.6094 1.63597 4.65806 1.54694 4.72528C1.45792 4.79249 1.38329 4.8769 1.32749 4.97349C1.27169 5.07008 1.23585 5.17689 1.2221 5.28759C1.20834 5.39829 1.21695 5.51062 1.24742 5.61793C1.27788 5.72524 1.32958 5.82534 1.39945 5.9123C1.46932 5.99926 1.55594 6.0713 1.65417 6.12417L4.59083 7.8275C4.41829 8.2579 4.29826 8.70753 4.23333 9.16667H0.833333C0.61232 9.16667 0.400358 9.25446 0.244078 9.41074C0.0877974 9.56702 0 9.77899 0 10C0 10.221 0.0877974 10.433 0.244078 10.5893C0.400358 10.7455 0.61232 10.8333 0.833333 10.8333H4.23333C4.29826 11.2925 4.41829 11.7421 4.59083 12.1725L1.65167 13.8758C1.55344 13.9287 1.46682 14.0007 1.39695 14.0877C1.32708 14.1747 1.27538 14.2748 1.24492 14.3821C1.21445 14.4894 1.20584 14.6017 1.2196 14.7124C1.23335 14.8231 1.26919 14.9299 1.32499 15.0265C1.38079 15.1231 1.45542 15.2075 1.54444 15.2747C1.63347 15.3419 1.73508 15.3906 1.84326 15.4178C1.95144 15.445 2.06399 15.4502 2.17422 15.4332C2.28445 15.4161 2.39014 15.377 2.485 15.3183L5.42667 13.6125C5.70788 13.9677 6.02917 14.2893 6.38417 14.5708L4.68167 17.5133C4.57899 17.7041 4.55467 17.9274 4.61384 18.1358C4.67301 18.3442 4.81103 18.5214 4.99863 18.6298C5.18624 18.7382 5.40868 18.7692 5.61879 18.7164C5.82891 18.6635 6.01018 18.5309 6.12417 18.3467L7.8275 15.4075C8.25789 15.5804 8.7075 15.701 9.16667 15.7667L9.16667 19.1667C9.16667 19.3877 9.25446 19.5996 9.41074 19.7559C9.56702 19.9122 9.77899 20 10 20C10.221 20 10.433 19.9122 10.5893 19.7559C10.7455 19.5996 10.8333 19.3877 10.8333 19.1667L10.8333 15.7667C11.2924 15.7016 11.742 15.5815 12.1725 15.4092L13.8758 18.3483C13.9898 18.5326 14.1711 18.6652 14.3812 18.7181C14.5913 18.7709 14.8138 18.7399 15.0014 18.6315C15.189 18.5231 15.327 18.3459 15.3862 18.1375C15.4453 17.9291 15.421 17.7058 15.3183 17.515L13.6133 14.5725C13.9683 14.291 14.2896 13.9694 14.5708 13.6142L17.5125 15.32C17.6074 15.3787 17.713 15.4177 17.8233 15.4348C17.9335 15.4519 18.0461 15.4467 18.1542 15.4195C18.2624 15.3923 18.364 15.3436 18.4531 15.2764C18.5421 15.2092 18.6167 15.1248 18.6725 15.0282C18.7283 14.9316 18.7641 14.8248 18.7779 14.7141C18.7917 14.6034 18.783 14.491 18.7526 14.3837C18.7221 14.2764 18.6704 14.1763 18.6005 14.0894C18.5307 14.0024 18.4441 13.9304 18.3458 13.8775L15.4067 12.1742C15.5802 11.7433 15.7011 11.2931 15.7667 10.8333L19.1667 10.8333C19.3877 10.8333 19.5996 10.7455 19.7559 10.5893C19.9122 10.433 20 10.221 20 10C20 9.77899 19.9122 9.56702 19.7559 9.41074C19.5996 9.25446 19.3877 9.16667 19.1667 9.16667ZM10 14.1667C4.49333 13.9917 4.495 6.0075 10 5.83333C15.5067 6.00833 15.505 13.9925 10 14.1667Z" fill="#D7DADF"/>
							</svg>
						</button>)
					}
					</div>
				</div>
			</div>
		</>
	)
}

export default Header