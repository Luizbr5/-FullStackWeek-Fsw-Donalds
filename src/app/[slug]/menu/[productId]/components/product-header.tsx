"use client";

import { Product } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface ProductHeaderProps {
    product: Pick<Product,'name'|'imageUrl'>
}

const ProductHeader = ({product}:ProductHeaderProps) => {
    const { slug } = useParams<{slug: string}>();
    const router = useRouter();
    const HandleBackClick = () => router.back();
    const handleOrdesClick = () => router.push(`/${slug}/orders`);
    return ( <div className="relative w-full min-h-[300px]">
        <Button variant="secondary" size="icon" className="absolute top-4 left-4 z-50 rounded-full" onClick={HandleBackClick}>
            <ChevronLeftIcon/>
        </Button>
            <Image src={product.imageUrl} alt={product.name} fill className="object-contain"/>
        <Button variant="secondary" size="icon" className="absolute right-4 top-4 z-50 rounded-full" onClick={handleOrdesClick}>
            <ScrollTextIcon/>
        </Button>
        </div> );
}
 
export default ProductHeader;