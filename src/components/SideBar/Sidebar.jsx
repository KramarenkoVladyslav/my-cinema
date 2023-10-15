import styles from "./Sidebar.module.css";

function Sidebar() {
    return (
		<div className={styles.sidebar}>
			<ul className={styles.sidebarBlock}>
				<li>
					<a href='#' className={styles.sidebarLink}>
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M18.6111 20H13.6111C12.8439 20 12.2222 19.4262 12.2222 18.7179V14.1026C12.2222 13.5359 11.725 13.0769 11.1111 13.0769H8.88889C8.275 13.0769 7.77778 13.5359 7.77778 14.1026V18.7179C7.77778 19.4262 7.15611 20 6.38889 20H1.38889C0.621667 20 0 19.4262 0 18.7179V8.92974C0 7.75077 0.585556 6.63692 1.58833 5.90769L9.48389 0.164615C9.78667 -0.0548718 10.2133 -0.0548718 10.5156 0.164615L18.4122 5.90769C19.415 6.63692 20 7.75026 20 8.92872V18.7179C20 19.4262 19.3783 20 18.6111 20Z'
								fill='white'
							/>
						</svg>
					</a>
				</li>
				<li>
					<a href='#' className={styles.sidebarLink}>
						<svg
							width='22'
							height='27'
							viewBox='0 0 22 27'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M1 26V1H21V26L11.1724 20.4268L1 26Z'
								stroke='#6D6F72'
							/>
						</svg>
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Sidebar;
