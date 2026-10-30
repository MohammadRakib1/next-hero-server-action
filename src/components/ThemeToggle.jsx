"use client";
import { Switch } from "@heroui/react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "@gravity-ui/icons";


const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    const icons = {
        darkMode: {
            off: Sun,
            on: Moon,
            selectedControlClass: "",
        }
    };

    return (
        <div className="flex gap-3">
            {Object.entries(icons).map(([key, value]) => (
                <Switch onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} key={key} defaultSelected aria-label={key} size="lg">
                    {({ isSelected }) => (
                        <Switch.Content>
                            <Switch.Control className={isSelected ? value.selectedControlClass : ""}>
                                <Switch.Thumb>
                                    <Switch.Icon>
                                        {isSelected ? (
                                            <value.on className="size-3 text-inherit opacity-100" />
                                        ) : (
                                            <value.off className="size-3 text-inherit opacity-70" />
                                        )}
                                    </Switch.Icon>
                                </Switch.Thumb>
                            </Switch.Control>
                        </Switch.Content>
                    )}
                </Switch>
            ))}
        </div>
    );
};

export default ThemeToggle;