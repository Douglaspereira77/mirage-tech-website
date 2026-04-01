import { Link } from "@/i18n/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function BlogPage() {
    const t = useTranslations("Blog");
    const postsData = t.raw("posts");
    
    const posts = Object.entries(postsData).map(([slug, data]: [string, any]) => ({
        ...data,
        slug,
    }));

    return (
        <div className="flex flex-col min-h-screen bg-background pt-20">
            <div className="container px-4 md:px-6 py-12">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                        {t("title")}
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        {t("description")}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {posts.map((post, index) => (
                        <Card key={index} className="flex flex-col">
                            <CardHeader>
                                <div className="flex justify-between items-center mb-2">
                                    <Badge variant="secondary">{post.category}</Badge>
                                    <span className="text-sm text-muted-foreground">{post.date}</span>
                                </div>
                                <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <p className="text-muted-foreground">
                                    {post.excerpt}
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button asChild variant="ghost" className="p-0">
                                    <Link href={`/blog/${post.slug}`}>{t("readMore")}</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
