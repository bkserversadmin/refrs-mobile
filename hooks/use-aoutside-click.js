import React from "react";

window.addEventListener = (x) => x;
window.removeEventListener = (x) => x;

export const useOutsideClick = (callback) => {
	const ref = React.useRef();

	const onClickOutside = (event) => {
		event.stopPropagation();
	};

	React.useEffect(() => {
		const handleClick = (event) => {
			console.log("el evento ===>", event);
			if (ref.current && !ref.current.contains(event.target)) {
				console.log("el ref ====>", ref);
				callback();
			}
		};

		window.addEventListener("click", handleClick, true);

		return () => {
			window.removeEventListener("click", handleClick, true);
		};
	}, [callback, ref]);

	return { ref, onClickOutside };
};
