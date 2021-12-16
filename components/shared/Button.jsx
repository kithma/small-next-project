import Link from "next/link";
import styles from "./Shared.module.css";

const Button = ({ link, children }) => {
	return <Link href={link}>
		<a className={styles.btn}>
			{children}
		</a>
		{/* {children} */}
	</Link>
}

export default Button;