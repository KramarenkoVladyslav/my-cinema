import styles from './Sidebar.module.css'; 

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
								d='M1.8824 6.31207L1.88245 6.31204L9.77735 0.569438C9.77744 0.569372 9.77753 0.569306 9.77762 0.569241C9.90547 0.476757 10.0949 0.477121 10.2217 0.569124C10.2217 0.569143 10.2217 0.569162 10.2217 0.569181L18.1181 6.31206L18.1182 6.31207C18.9994 6.95294 19.5 7.91972 19.5 8.92872V18.7179C19.5 19.1131 19.1406 19.5 18.6111 19.5H13.6111C13.0816 19.5 12.7222 19.1131 12.7222 18.7179V14.1026C12.7222 13.2228 11.9627 12.5769 11.1111 12.5769H8.88889C8.03729 12.5769 7.27778 13.2228 7.27778 14.1026V18.7179C7.27778 19.1131 6.9184 19.5 6.38889 19.5H1.38889C0.859374 19.5 0.5 19.1131 0.5 18.7179V8.92974C0.5 7.92028 1.0011 6.95297 1.8824 6.31207Z'
								stroke='#6D6F72'
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
